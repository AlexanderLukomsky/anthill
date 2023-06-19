import { Metadata } from 'next';
import { Registration } from 'components/pages/auth/registration';
import { projectName } from 'common/constants/main';

export const metadata: Metadata = {
  title: `${projectName} - registration`,
};

const RegistrationPage = () => <Registration />;

export default RegistrationPage;
