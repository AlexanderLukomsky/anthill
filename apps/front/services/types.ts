import { AxiosError } from 'axios';

export type ResponseError = AxiosError<{ message: string }>;

export type BaseQueryError<T> = {
  status?: number;
  data?: T;
};
