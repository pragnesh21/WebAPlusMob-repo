export interface LoginRequest {
  UserName: string;
  Password: string;
}

export interface LoginResponse {
  token: string;
  expiration: string;
  userName: string;
  email: string;
  roles: string[];
}