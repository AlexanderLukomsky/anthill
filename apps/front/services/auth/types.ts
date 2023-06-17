export type AuthRequestData = {
  email: string;
  password: string;
};

export type AuthError = {
  status: number;
  data: { message: string };
};
