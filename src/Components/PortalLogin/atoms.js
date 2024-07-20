import { atom } from "recoil";

export const portalAuthenticationState = atom({
  key: "portalAuthState",
  default: {
    isAuthenticated: false,
    token: null,
    role: null,
  },
});
