export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

type AuthStatus = "authenticated" | "unauthenticated" | "pending";

export interface AuthResponse {
  ok: boolean;
  status: AuthStatus;
  data?: User;
  token?: string;
  errors?: ErrorsClass | string;
}

export interface ErrorsClass {
  [key: string]: ErrorDetail;
}

export interface ErrorDetail {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}
