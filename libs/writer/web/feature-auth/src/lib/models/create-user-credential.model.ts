export interface CreateUserCredential {
  username: string;
  email: string;
  phone: string;
  password: string;
  providerId?: string;
  provider?: string;
}
