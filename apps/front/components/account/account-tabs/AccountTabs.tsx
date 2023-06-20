'use client';

import { AccountPages, AccountPagesPaths } from 'common/pages-path/account-pages';
import { useRouter } from 'next/navigation';
import { Tabs } from 'packages.inputs.tabs';
import { FC } from 'react';

const tabs = [
  { label: 'General information', value: AccountPages.Information },
  { label: 'Devices', value: AccountPages.Devices },
  { label: 'Account Management', value: AccountPages.Management },
];

type AccountTabsProps = {
  currentTab: AccountPagesPaths;
};

export const AccountTabs: FC<AccountTabsProps> = ({ currentTab }) => {
  const { push } = useRouter();

  const handleChange = (value: AccountPagesPaths) => {
    push(value);
  };

  return (
    <div>
      <Tabs tabs={tabs} value={currentTab} onChange={handleChange} />
    </div>
  );
};
