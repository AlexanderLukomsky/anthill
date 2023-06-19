'use client';

import { List, Stack } from 'lib/mui';
import { HomeIcon } from 'packages.icons.home';
import { PlusSquareOutlineIcon } from 'packages.icons.plus-square-outline';
import { PersonOutlineIcon } from 'packages.icons.person-outline';
import { SearchIcon } from 'packages.icons.search';
import { LogOutIcon } from 'packages.icons.log-out';
import { Button } from 'packages.inputs.button';
import { SidebarItem } from './sidebar-item/SidebarItem';

const items = [
  { path: '/', title: 'Home', children: <HomeIcon /> },
  { path: '/', title: 'Create', children: <PlusSquareOutlineIcon /> },
  { path: '/', title: 'My Profile', children: <PersonOutlineIcon /> },
  { path: '/', title: 'Search', children: <SearchIcon /> },
];

export const Sidebar = () => {
  const handleLogoutClick = () => {
    console.log('log out');
  };

  return (
    <Stack
      sx={{
        minHeight: '100%',
        minWidth: '220px',
        p: '74px 5px 60px 60px',
        borderRight: '1px solid',
        borderColor: 'dark.300',
      }}
    >
      <List sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '24px' }}>
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </List>

      <Button
        variant="text"
        color="light"
        sx={{ maxWidth: 'max-content', p: '10px 10px 10px 0' }}
        typographyProps={{
          variant: 'medium_text_14',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
        onClick={handleLogoutClick}
      >
        <LogOutIcon />
        Log Out
      </Button>
    </Stack>
  );
};
