import { useRecoilState } from "recoil";
import { portalAuthenticationState } from "./atoms";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000";

// *Get LoginURL
const getLoginUrl = (role) => {
  switch (role) {
    case "admin":
      return `${API_URL}/api/v1/admin/login`;
    case "trainingPartner":
      return `${API_URL}/api/v1/tp/login`;
    case "assessmentAgency":
      return `${API_URL}/api/v1/aa/login`;
    default:
      return `${API_URL}/portal/login`;
  }
};

export const usePortalAuthentication = () => {
  const [authState, setAuthState] = useRecoilState(portalAuthenticationState);
  const navigate = useNavigate();

  const loginPortal = async (email, password, role) => {
    try {
      const loginUrl = getLoginUrl(role);

      const response = await axios.post(
        loginUrl,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setAuthState({
        isAuthenticated: true,
        token: response.data.data,
        role: role,
      });

      localStorage.setItem("portalAuthToken", response.data.data);
      localStorage.setItem("portalUserRole", role);

      console.log("You have successfully logged in");
      toast.success("You have successfully logged in.", {
        position: "bottom-center",
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });

      // *Navigate based on role
      // switch (role) {
      //   case "admin":
      //     navigate("/admin/dashboard");
      //     break;
      //   case "trainingPartner":
      //     navigate("/trainingpartner/dashboard");
      //     break;
      //   case "assessmentAgency":
      //     navigate("/assessmentagency/dashboard");
      //     break;
      //   default:
      //     navigate("/dashboard");
      // }
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        token: null,
        role: null,
      });

      toast.error(
        error.response?.data?.error || "An error occurred during login",
        {
          position: "top-center",
          closeOnClick: true,
          draggable: true,
          theme: "colored",
        }
      );

      throw error;
    }
  };

  return { loginPortal };
};
