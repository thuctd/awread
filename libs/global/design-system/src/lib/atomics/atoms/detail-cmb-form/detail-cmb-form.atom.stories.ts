import { DetailCmbFormAtom } from './detail-cmb-form.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Inputs/select/Detail Cmb Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: DetailCmbFormAtom,
  props: {},
});
