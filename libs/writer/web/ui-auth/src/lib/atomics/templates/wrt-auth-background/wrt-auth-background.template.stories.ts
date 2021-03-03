import { WrtAuthBackgroundTemplate } from './wrt-auth-background.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Wrt Auth Background',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtAuthBackgroundTemplate,
  props: {},
});
