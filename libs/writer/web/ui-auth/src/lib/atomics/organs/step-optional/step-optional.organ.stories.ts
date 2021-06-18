import { StepOptionalOrgan } from './step-optional.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Step Optional'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: StepOptionalOrgan,
  props: {

  }
})