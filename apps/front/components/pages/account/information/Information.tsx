import { AccountForm } from 'components/account/account-form';
import { Box, Stack } from 'lib/mui';
import { Button } from 'packages.inputs.button';

export const Information = () => (
  <>
    <Stack
      direction="row"
      sx={{
        gap: '36px',
        borderBottom: '1px solid',
        borderColor: 'dark.300',
        mb: '24px',
        pb: '24px',
      }}
    >
      <Box sx={{ color: 'light.100' }}>left</Box>
      <AccountForm />
    </Stack>

    <Button sx={{ display: 'block', minWidth: '160px', ml: 'auto' }}>Save Changes</Button>
  </>
);
