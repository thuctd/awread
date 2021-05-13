export interface CreateUserCredential {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export function CreateUserCredential(params: Partial<CreateUserCredential>) {
  return {

  } as CreateUserCredential;
}