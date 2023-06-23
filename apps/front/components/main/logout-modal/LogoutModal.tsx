'use client';

import { Box, Stack, Typography } from 'lib/mui';
import { Modal } from 'packages.components.modal';
import { Button } from 'packages.inputs.button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/hooks';
import { setIsOpenLogoutModal } from 'redux/slices/app';
import { selectIsOpenLogoutModal } from 'redux/slices/app/selectors';

export const LogoutModal = () => {
  const dispatch = useAppDispatch();

  const isOpenLogoutModal = useSelector(selectIsOpenLogoutModal);

  const handleCloseModal = () => {
    dispatch(setIsOpenLogoutModal(false));
  };

  const handleSubmitClick = () => {
    console.log('ok');
  };

  return (
    <Modal
      sx={{
        maxWidth: '438px',
        width: '100%',
      }}
      open={isOpenLogoutModal}
      onClose={handleCloseModal}
      title="Log Out"
      isLoading={false}
    >
      <Box sx={{ p: '30px 24px 36px' }}>
        <Typography component="p" variant="regular_text_16" color="light.100" sx={{ mb: '30px' }}>
          Are you really want to log out of your account “email@email.com”?
        </Typography>

        <Stack direction="row" justifyContent="end" sx={{ gap: '24px' }}>
          <Button
            variant="outlined"
            sx={{ maxWidth: '96px', width: '100%' }}
            onClick={handleSubmitClick}
          >
            Yes
          </Button>

          <Button sx={{ maxWidth: '96px', width: '100%' }} onClick={handleCloseModal}>
            No
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
