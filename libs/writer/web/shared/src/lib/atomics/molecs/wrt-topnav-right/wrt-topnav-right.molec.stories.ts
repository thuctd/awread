import { action } from '@storybook/addon-actions';
import { WrtTopnavRightMolec } from './wrt-topnav-right.molec';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Wrt Topnav Right',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: WrtTopnavRightMolec,
  props: {
    searchEvent: action('Search result'),
  },
});
