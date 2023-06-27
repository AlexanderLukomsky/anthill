import { Box, Stack } from 'lib/mui';
import { convertFileToBase64 } from 'common/helpers/convert-base-64';
import { EmptyAvatar } from 'components/empty-avatar';
import Image from 'next/image';
import { Modal } from 'packages.components.modal';
import { Button } from 'packages.inputs.button';
import { FC, useRef, ChangeEvent } from 'react';
import { Nullable } from 'common/types';
import { useAppDispatch } from 'redux/hooks';
import { setAvatarImage, setPreviewImage } from 'redux/slices/account-information';

type AddAvatarModalProps = {
  avatarImage: Nullable<string>;
  previewImage: Nullable<string>;
  open: boolean;
  onClose: () => void;
};

export const AddAvatarModal: FC<AddAvatarModalProps> = ({
  avatarImage,
  previewImage,
  open,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleChangeUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    if (files) {
      const file = files[0];

      convertFileToBase64(file, (image) => {
        dispatch(setPreviewImage(image.src));
      });

      event.currentTarget.value = '';
    }
  };

  const handleClose = () => {
    dispatch(setPreviewImage(null));
    onClose();
  };

  const handleSaveImage = () => {
    dispatch(setAvatarImage());
    onClose();
  };

  return (
    <>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChangeUploadImage}
      />

      <Modal
        sx={{
          width: '492px',
          height: '564px',
        }}
        open={open}
        onClose={handleClose}
        title="Add a Profile Photo"
        isLoading={false}
      >
        <Stack>
          {previewImage && (
            <Stack>
              <Box
                sx={{ width: '332px', height: '340px', m: '28px auto 36px', position: 'relative' }}
              >
                <Image src={previewImage} fill alt="upload image" />
              </Box>

              <Button sx={{ maxWidth: '36px', m: '0 36px 0 auto' }} onClick={handleSaveImage}>
                Save
              </Button>
            </Stack>
          )}

          {!previewImage && (
            <Stack alignItems="center">
              <Box sx={{ width: '222px', height: '228px', mt: '72px', position: 'relative' }}>
                {!avatarImage && <EmptyAvatar containerProps={{ sx: { borderRadius: 'none' } }} />}

                {avatarImage && <Image src={avatarImage} fill alt="avatar image" />}
              </Box>

              <Button onClick={handleUpload} sx={{ mt: '60px' }}>
                Select from Computer
              </Button>
            </Stack>
          )}
        </Stack>
      </Modal>
    </>
  );
};
