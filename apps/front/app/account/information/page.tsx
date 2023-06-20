import { Metadata } from 'next';
import { projectName } from 'common/constants/main';
import { Information } from 'components/pages/account/information';

export const metadata: Metadata = {
  title: `${projectName} - account information`,
};

const InformationPage = () => <Information />;

export default InformationPage;
