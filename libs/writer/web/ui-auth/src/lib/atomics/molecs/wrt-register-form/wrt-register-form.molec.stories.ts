import { WrtRegisterFormMolec } from './wrt-register-form.molec';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Wrt Register Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtRegisterFormMolec,
  props: {},
});
