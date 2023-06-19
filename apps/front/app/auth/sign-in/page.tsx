import { Metadata } from 'next';
import { SignIn } from 'components/pages/auth/sign-in';
import { projectName } from 'common/constants/main';

export const metadata: Metadata = {
  title: `${projectName} - registration`,
};

const SignInPage = () => <SignIn />;

export default SignInPage;
