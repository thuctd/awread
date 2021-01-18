import { DetailToogleFormAtom } from './detail-toogle-form.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Inputs/toogle/Detail Toogle Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: DetailToogleFormAtom,
  props: {},
});
