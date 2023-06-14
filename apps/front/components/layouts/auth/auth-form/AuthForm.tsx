import { FC, ReactNode } from 'react';
import { Stack, SxProps } from 'mui.lib';

export type AuthFormProps = {
  children: ReactNode;
  sx?: SxProps;
};
export const AuthForm: FC<AuthFormProps> = ({ children, sx }) => (
  <Stack
    sx={{
      backgroundColor: 'dark.500',
      border: '1px solid',
      borderColor: 'dark.300',
      borderRadius: '2px',
      maxWidth: '378px',
      width: '100%',
      p: '24px 24px 30px 24px',
      ...sx,
    }}
  >
    {children}
  </Stack>
);
