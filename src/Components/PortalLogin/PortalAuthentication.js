import { useRecoilState } from 'recoil';
import { portalAuthenticationState } from './atoms';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5173'; 

export const usePortalAuthentication = () => {
  const [authState, setAuthState] = useRecoilState(portalAuthenticationState);
  const navigate = useNavigate();

  const loginPortal = async (email, password, role) => {
    try {
      const response = await axios.post(
        `${API_URL}/portal/login`,
        { email, password, role },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      setAuthState({
        isAuthenticated: true,
        token: response.data.data,
        role: role,
      });

      // *Store token and role in localStorage
      localStorage.setItem('portalAuthToken', response.data.data);
      localStorage.setItem('portalUserRole', role);

      toast.success("You have successfully logged in.", {
        position: "bottom-center",
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });

      // *Navigate based on role
      switch(role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'trainingPartner':
          navigate('/trainingpartner/dashboard');
          break;
        case 'assessmentAgency':
          navigate('/assessmentagency/dashboard');
          break;
        default:
          navigate('/dashboard');
      }
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