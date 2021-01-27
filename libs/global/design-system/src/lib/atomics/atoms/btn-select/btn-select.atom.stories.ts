import { BtnSelectAtom } from './btn-select.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Inputs/select/Btn Select',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: BtnSelectAtom,
  props: {},
});
