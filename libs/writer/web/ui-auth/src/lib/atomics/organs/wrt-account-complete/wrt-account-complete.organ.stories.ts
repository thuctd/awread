import { WrtAccountCompleteOrgan } from './wrt-account-complete.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Organs/Wrt Account Complete',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtAccountCompleteOrgan,
  props: {
    submitEvent: action('account complete'),
  },
});
