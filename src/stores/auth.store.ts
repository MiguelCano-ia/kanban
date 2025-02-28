import { AuthResponse, ErrorsClass, User } from "@/interfaces/auth.interface";
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export interface AuthState extends AuthResponse {
  login: (email: string, password: string) => Promise<void>;
  registerUser: (response: AuthResponse) => void;
  logout: () => void;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  ok: false,
  status: "pending",
  data: undefined,
  token: undefined,
  errors: undefined,
  login: async (email, password) => {
    // Implement login logic here
  },
  registerUser: (response: AuthResponse) => {
    set({ ...response, status: "authenticated" });
  },
  logout: () => {
    // Implement logout logic here
  },
});

export const useAuthStore = create<AuthState>()(devtools(storeApi));
