import { create } from 'zustand';

const formProductStore = create((set) => ({
  loginUsername: "",
  setLoginUsername: (username) => set({ loginUsername: username }),
  loginPassword: "",
  setLoginPassword: (password) => set({ loginPassword: password }),
  signupUsername: "",
  setSignupUsername: (username) => set({ signupUsername: username }),
  signupPassword: "",
  setSignupPassword: (password) => set({ signupPassword: password }),
}));

export default formProductStore;
