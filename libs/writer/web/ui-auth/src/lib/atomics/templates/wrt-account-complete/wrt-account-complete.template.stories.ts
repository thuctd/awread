import { WrtAccountCompleteTemplate } from './wrt-account-complete.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Templates/Wrt Account Complete',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtAccountCompleteTemplate,
  props: {
    submitEvent: action('submit event'),
  },
});
