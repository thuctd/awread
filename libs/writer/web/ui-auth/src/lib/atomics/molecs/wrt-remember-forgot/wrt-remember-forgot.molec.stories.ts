import { WrtRememberForgotMolec } from './wrt-remember-forgot.molec';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Wrt Remember Forgot',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtRememberForgotMolec,
  props: {},
});
