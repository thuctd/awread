import { ProfileChangeCoverTemplate } from './profile-change-cover.template';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Templates/Profile Change Cover'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: ProfileChangeCoverTemplate,
  props: {

  }
})