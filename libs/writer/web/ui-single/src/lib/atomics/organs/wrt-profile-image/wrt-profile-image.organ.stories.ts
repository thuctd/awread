import { WrtProfileImageOrgan } from './wrt-profile-image.organ';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Organs/Wrt Profile Image',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileImageOrgan,
  props: {},
});
