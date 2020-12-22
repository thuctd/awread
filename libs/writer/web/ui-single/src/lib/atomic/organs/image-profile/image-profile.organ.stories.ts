import { ImageProfileOrgan } from './image-profile.organ';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Organs/Image Profile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: ImageProfileOrgan,
  props: {

  }
})