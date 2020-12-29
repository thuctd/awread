import { ProfileTemplate } from './profile.template';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Templates/Profile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: ProfileTemplate,
  props: {

  }
})