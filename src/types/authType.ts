import type { User } from 'firebase/auth';

export interface AuthState {
  user: User | null;
  userData: UserData | null;
  isLogin: boolean;
  loading: boolean;
  error: string | null;
  onMember: (email: string, password: string, name: string, phone: string) => Promise<void>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
}

export interface UserData {
  uid: string;
  name: string;
  email: string;
  phone: string;
}
