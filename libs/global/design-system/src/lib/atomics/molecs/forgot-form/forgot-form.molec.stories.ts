import { ForgotFormMolec } from './forgot-form.molec';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Molecs/Forgot Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: ForgotFormMolec,
  props: {

  }
})