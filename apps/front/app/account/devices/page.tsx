import { Metadata } from 'next';
import { projectName } from 'common/constants/main';
import { Devices } from 'components/pages/account/devices';

export const metadata: Metadata = {
  title: `${projectName} - account devices`,
};

const DevicesPage = () => <Devices />;

export default DevicesPage;
