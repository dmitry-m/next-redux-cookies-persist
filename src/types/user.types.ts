export interface User {
  id: number;
  email: string;
  isAdmin: boolean;
  favorites: string[];
  createdAt: Date | null;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  user: User;
  tokens: Tokens;
}

export interface EmailPasswordInput {
  email: string;
  password: string;
}

export interface IsAdminInput {
  isAdmin: boolean;
}

export interface UserInitialState {
  user: User | null;
  isLoading: boolean;
  tokens: Tokens;
}
