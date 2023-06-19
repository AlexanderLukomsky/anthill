import { Metadata } from 'next';
import { projectName } from 'common/constants/main';

export const metadata: Metadata = {
  title: `${projectName} - account management`,
};

const ManagementPage = () => <div>ManagementPage</div>;

export default ManagementPage;
