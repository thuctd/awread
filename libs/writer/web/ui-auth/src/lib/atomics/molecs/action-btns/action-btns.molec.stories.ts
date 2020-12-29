import { ActionBtnsMolec } from './action-btns.molec';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Action Btns'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: ActionBtnsMolec,
  props: {

  }
})