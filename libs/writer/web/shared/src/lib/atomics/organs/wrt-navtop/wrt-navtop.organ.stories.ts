import { WrtNavtopOrgan } from './wrt-navtop.organ';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Shared/Organs/Wrt Navtop',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: WrtNavtopOrgan,
  props: {
    searchEvent: action('Search result'),
  },
});
