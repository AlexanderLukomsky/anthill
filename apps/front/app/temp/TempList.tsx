import { Stack, Typography } from 'lib/mui';
import Link from 'next/link';
import { FC } from 'react';

type TempListProps = {
  arr: {
    path: string;
    title: string;
  }[];
};

export const TempList: FC<TempListProps> = ({ arr }) => (
  <Stack direction="row" gap="10px" sx={{ p: '10px' }}>
    {arr.map((item) => (
      <Link
        href={item.path}
        style={{ padding: '10px', border: '1px solid gray', borderRadius: '3px' }}
      >
        <Typography
          variant="h3"
          color="light.100"
          sx={{
            '&:hover': {
              color: 'purple',
            },
          }}
        >
          {item.title}
        </Typography>
      </Link>
    ))}
  </Stack>
);
