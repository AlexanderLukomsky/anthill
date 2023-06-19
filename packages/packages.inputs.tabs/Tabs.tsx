import { FC, SyntheticEvent } from 'react';
import { Tabs as MuiTabs, Tab, Typography, useMediaQuery, useTheme } from '@mui/material';
import 'settings.config-muidts';

type TabType = {
  label: string;
  value: string;
};

export type TabsProps = {
  tabs: TabType[];
  value: string;
  onChange: (value?: any, event?: SyntheticEvent<Element, Event>) => void;
};

export const Tabs: FC<TabsProps> = ({ tabs, value, onChange }) => {
  const { breakpoints } = useTheme();

  const isSmall = useMediaQuery(breakpoints.down('md'));

  return (
    <MuiTabs
      scrollButtons
      value={value}
      variant={isSmall ? 'scrollable' : 'standard'}
      onChange={(event, value) => onChange(value, event)}
      orientation={isSmall ? 'vertical' : 'horizontal'}
      sx={{
        width: '100%',

        '& .MuiTabs-flexContainer': {
          justifyContent: 'space-between',
          borderBottom: '2px solid',
          borderBottomColor: 'dark.100',
          [breakpoints.down('md')]: { borderBottom: 'none', height: '70px' },
        },
        '& .MuiTabScrollButton-root': {
          color: 'light.100',
          borderRadius: '3px',
          m: '5px auto',
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          value={tab.value}
          sx={{
            [breakpoints.down('lg')]: {
              p: '10px',
            },
            [breakpoints.down('md')]: {
              minHeight: '30px',
              p: '0',
            },
          }}
          label={
            <Typography
              sx={{
                color: tab.value === value ? 'primary.500' : 'dark.100',
              }}
              variant="h3"
            >
              {tab.label}
            </Typography>
          }
          wrapped
        />
      ))}
    </MuiTabs>
  );
};
