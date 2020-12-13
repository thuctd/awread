import { ActionBtnsGroup } from './action-btns.group';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Groups/ActionBtns'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: ActionBtnsGroup,
  props: {

  }
})