import { WrtNewPasswordOrgan } from './wrt-new-password.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Wrt New Password',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtNewPasswordOrgan,
  props: {},
});
