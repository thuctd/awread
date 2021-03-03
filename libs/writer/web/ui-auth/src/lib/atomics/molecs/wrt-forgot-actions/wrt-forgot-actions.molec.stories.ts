import { WrtForgotActionsMolec } from './wrt-forgot-actions.molec';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Wrt Forgot Actions',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtForgotActionsMolec,
  props: {},
});
