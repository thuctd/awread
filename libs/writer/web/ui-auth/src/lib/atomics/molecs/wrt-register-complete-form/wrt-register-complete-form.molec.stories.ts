import { WrtRegisterCompleteFormMolec } from './wrt-register-complete-form.molec';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Wrt Register Complete Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: WrtRegisterCompleteFormMolec,
  props: {

  }
})