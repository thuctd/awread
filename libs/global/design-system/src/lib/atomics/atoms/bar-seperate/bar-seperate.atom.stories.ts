import { BarSeperateAtom } from './bar-seperate.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Bars/Bar Seperate',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: BarSeperateAtom,
  props: {},
});
