import { Stack, StackProps, SvgIconProps, useTheme } from 'lib/mui';
import { ImageOutlineIcon } from 'packages.icons.image-outline';
import { FC } from 'react';

type EmptyAvatarProps = {
  imageProps?: SvgIconProps;
  containerProps?: StackProps;
};

export const EmptyAvatar: FC<EmptyAvatarProps> = ({
  imageProps = { sx: {} },
  containerProps = { sx: {} },
}) => {
  const { breakpoints } = useTheme();

  const { sx: imageSx, ...restImageProps } = imageProps;
  const { sx: containerSx, ...restContainerProps } = containerProps;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100%', bgcolor: 'dark.500', borderRadius: '50%', ...containerSx }}
      {...restContainerProps}
    >
      <ImageOutlineIcon
        sx={{
          width: 48,
          height: 48,
          color: 'light.100',
          [breakpoints.down('lsm')]: { width: 24, height: 24 },
          ...imageSx,
        }}
        {...restImageProps}
      />
    </Stack>
  );
};
