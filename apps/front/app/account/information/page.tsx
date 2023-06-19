import { Metadata } from 'next';
import { projectName } from 'common/constants/main';

export const metadata: Metadata = {
  title: `${projectName} - account information`,
};

const InformationPage = () => <div>InformationPage</div>;

export default InformationPage;
