import { WrtIndexOrgan } from './wrt-index.organ';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Organs/Wrt Index',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtIndexOrgan,
  props: {},
});
