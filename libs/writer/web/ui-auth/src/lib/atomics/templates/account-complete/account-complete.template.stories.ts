import { AccountCompleteTemplate } from './account-complete.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Templates/Account Complete'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: AccountCompleteTemplate,
  props: {
    submitEvent: action('submit event')
  }
})