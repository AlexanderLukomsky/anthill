import type { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Tabs, TabsProps } from 'packages.inputs.tabs';
import { SyntheticEvent } from 'react';

const initialTabs = [
  { label: 'one', value: 'one' },
  { label: 'two', value: 'two' },
  { label: 'three', value: 'three' },
];

export const Example = ({ tabs }: TabsProps) => {
  const [{ value }, updateArgs] = useArgs();

  const handleChange = (value: any) => updateArgs({ value });

  return <Tabs tabs={tabs} value={value} onChange={handleChange} />;
};

const meta: Meta<TabsProps> = {
  title: 'UI/tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "import { Tabs } from 'packages.inputs.tabs';",
      },
    },
  },
  args: {
    value: initialTabs[0].value,
    tabs: initialTabs,
    onChange: (value?: any, event?: SyntheticEvent<Element, Event>) => {},
  },
};

export default meta;
