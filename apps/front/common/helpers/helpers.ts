import { ResponseError } from 'services';

export const handleError = (error: ResponseError) => {
  const serverError = error.response?.data?.message;

  if (error.response?.data?.message) {
    return serverError;
  }

  return 'Something went wrong. Please try again later';
};
