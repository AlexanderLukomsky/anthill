'use client';

import { Box, IconButton, Stack } from 'lib/mui';
import Image from 'next/image';
import { CloseIcon } from 'packages.icons.close';
import { Button } from 'packages.inputs.button';
import { EmptyAvatar } from 'components/empty-avatar';
import { useSelector } from 'react-redux';
import { selectAvatarState } from 'redux/slices/account-information/selectors';
import { useAppDispatch } from 'redux/hooks';
import { setIsOpenModal } from 'redux/slices/account-information';
import { avatarContainerStyle, closeIconStyle } from './style';
import { AddAvatarModal } from './add-avatar-modal';

export const UserAvatar = () => {
  const dispatch = useAppDispatch();

  const { isOpenModal, avatarImage, previewImage } = useSelector(selectAvatarState);

  const handleOpenModal = () => {
    dispatch(setIsOpenModal(true));
  };

  const handleCloseModal = () => {
    dispatch(setIsOpenModal(false));
  };

  return (
    <>
      <Stack alignItems="center" sx={{ gap: '24px' }}>
        <Box sx={avatarContainerStyle}>
          {avatarImage && (
            <>
              <Image src={avatarImage} fill alt="profile avatar" style={{ borderRadius: '50%' }} />

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

          {!avatarImage && <EmptyAvatar />}
        </Box>

        <Button variant="outlined" sx={{ width: '100%' }} onClick={handleOpenModal}>
          Add a Profile Photo
        </Button>
      </Stack>

      <AddAvatarModal
        open={isOpenModal}
        onClose={handleCloseModal}
        avatarImage={avatarImage}
        previewImage={previewImage}
      />
    </>
  );
};
