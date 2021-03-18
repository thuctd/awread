import { WrtForgotFormMolec } from './wrt-forgot-form.molec';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Wrt Forgot Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtForgotFormMolec,
  props: {},
});
