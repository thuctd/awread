import { AccountCompleteOrganOrgan } from './account-complete-organ.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Organs/Account Complete Organ'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: AccountCompleteOrganOrgan,
  props: {
    submitEvent: action('account complete')
  }
})