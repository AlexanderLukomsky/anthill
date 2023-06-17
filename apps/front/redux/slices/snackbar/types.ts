export type SnackbarPayload = {
  isShowSnackbar: boolean;
  message: string;
  severity?: Severity;
};

export type Severity = 'error' | 'success';
