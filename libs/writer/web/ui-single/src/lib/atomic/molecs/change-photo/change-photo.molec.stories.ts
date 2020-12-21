import { ChangePhotoMolec } from './change-photo.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Change Photo'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: ChangePhotoMolec,
  props: {

  }
})