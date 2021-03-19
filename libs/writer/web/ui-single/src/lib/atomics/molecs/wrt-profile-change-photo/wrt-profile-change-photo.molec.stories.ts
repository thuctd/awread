import { WrtProfileChangePhotoMolec } from './wrt-profile-change-photo.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Wrt Profile Change Photo',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileChangePhotoMolec,
  props: {},
});
