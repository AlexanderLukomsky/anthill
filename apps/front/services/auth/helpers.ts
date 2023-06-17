export const handleAuthErrors = (error: any) => {
  const errorsMessages = error?.data?.message;

  if (errorsMessages) {
    return errorsMessages;
  }

  return 'Something went wrong. Please try again later';
};
