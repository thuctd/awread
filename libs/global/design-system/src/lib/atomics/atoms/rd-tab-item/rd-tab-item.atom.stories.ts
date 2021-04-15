import { RdTabItemAtom } from './rd-tab-item.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/tabs/Rd Tab Item',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdTabItemAtom,
  props: {},
});
