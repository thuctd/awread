import { AccountCompleteOrgan } from './account-complete.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Organs/Account Complete',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: AccountCompleteOrgan,
  props: {
    submitEvent: action('account complete'),
  },
});
