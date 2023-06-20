import { Metadata } from 'next';
import { projectName } from 'common/constants/main';
import { Management } from 'components/pages/account/management';

export const metadata: Metadata = {
  title: `${projectName} - account management`,
};

const ManagementPage = () => <Management />;

export default ManagementPage;
