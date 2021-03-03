import { WrtProfileFormOrgan } from './wrt-profile-form.organ';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Organs/Wrt Profile Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileFormOrgan,
  props: {},
});
