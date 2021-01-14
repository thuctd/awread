import { RdHomeTabBookAtom } from './rd-home-tab-book.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/tabs/Rd Home Tab Book',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdHomeTabBookAtom,
  props: {},
});
