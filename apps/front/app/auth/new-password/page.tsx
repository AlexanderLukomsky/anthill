import { Metadata } from 'next';
import { NewPassword } from 'components/pages/auth/new-password';
import { projectName } from 'common/constants/main';

export const metadata: Metadata = {
  title: `${projectName} - new password`,
};

const NewPasswordPage = () => <NewPassword />;

export default NewPasswordPage;
