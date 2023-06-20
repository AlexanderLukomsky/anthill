/* eslint-disable @next/next/no-img-element */
import type { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Modal, ModalProps } from 'packages.components.modal';
import { Stack, Typography, Box } from '@mui/material';
import { Button } from 'packages.inputs.button';
import Image from 'next/image';
import image from '../../common/images/i5.png';

export const ExampleModal = ({ onClose, ...props }: ModalProps) => {
  const [{ open }, updateArgs] = useArgs();

  const handleClose = () => updateArgs({ open: false });

  const handleOpen = () => updateArgs({ open: true });

  return (
    <>
      <Modal sx={{ maxWidth: '450px', width: '100%' }} open={open} onClose={handleClose} {...props}>
        <Stack sx={{ color: 'light.100', p: '20px', gap: '20px' }}>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            some text
          </Typography>

          <Box
            sx={{
              position: 'relative',
              maxWidth: '350px',
              width: '100%',
              height: '250px',
              m: '0 auto',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <Image src={image} fill alt="example" />
          </Box>

          <Button onClick={handleClose}>Close Modal</Button>
        </Stack>
      </Modal>

      <Button onClick={handleOpen}>Open Modal</Button>
    </>
  );
};

const meta: Meta<ModalProps> = {
  title: 'UI/Modal',
  component: ExampleModal,
  tags: ['autodocs'],
  args: {
    title: 'Example modal',
    open: false,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        component: "import { Modal } from 'packages.components.modal'",
      },
    },
  },
};

export default meta;
