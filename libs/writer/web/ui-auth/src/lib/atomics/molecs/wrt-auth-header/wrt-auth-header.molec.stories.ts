import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { WrtAuthHeaderMolec } from './wrt-auth-header.molec';

export default {
  title: 'Auth/Molecs/Wrt Forgot Header',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtAuthHeaderMolec,
  props: {},
});
