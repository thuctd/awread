import { StepCompleteOrgan } from './step-complete.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Step Complete'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: StepCompleteOrgan,
  props: {

  }
})