import { FC, ReactNode } from 'react';
import { ListItem, Typography } from 'lib/mui';
import Link from 'next/link';

type SidebarItemProps = {
  path: string;
  title: string;
  children: ReactNode;
};

export const SidebarItem: FC<SidebarItemProps> = ({ path, title, children }) => (
  <ListItem
    sx={{
      display: 'flex',
      color: 'light.100',
      p: 0,
      '&:hover': {
        color: 'light.900',
      },
    }}
  >
    <Link href={path} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {children}

      <Typography variant="medium_text_14">{title}</Typography>
    </Link>
  </ListItem>
);
