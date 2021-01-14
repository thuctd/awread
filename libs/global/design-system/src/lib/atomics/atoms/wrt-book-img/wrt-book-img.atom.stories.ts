import { WrtBookImgAtom } from './wrt-book-img.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Images/image/Wrt Book Img',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: WrtBookImgAtom,
  props: {},
});
