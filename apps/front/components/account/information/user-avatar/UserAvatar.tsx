import { Box, IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import { CloseIcon } from 'packages.icons.close';
import { Button } from 'packages.inputs.button';
import Img from 'app/temp/images/i4.png';
import { EmptyAvatar } from 'components/empty-avatar';
import { avatarContainerStyle, closeIconStyle } from './style';

export const UserAvatar = () => {
  const avatarUrl = false;

  return (
    <Stack alignItems="center" sx={{ gap: '24px' }}>
      <Box sx={avatarContainerStyle}>
        {avatarUrl && (
          <>
            <Image src={Img} fill alt="profile avatar" style={{ borderRadius: '50%' }} />

            <IconButton
              sx={{
                position: 'absolute',
                right: '-4px',
                top: 13,
              }}
            >
              <CloseIcon sx={closeIconStyle} />
            </IconButton>
          </>
        )}

        {!avatarUrl && <EmptyAvatar />}
      </Box>

      <Button variant="outlined" sx={{ width: '100%' }}>
        Add a Profile Photo
      </Button>
    </Stack>
  );
};
