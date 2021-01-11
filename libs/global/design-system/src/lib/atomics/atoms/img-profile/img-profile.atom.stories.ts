import { imgProfileAtom } from './img-profile.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Images/image/img Profile',
};

export const bigImg = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: imgProfileAtom,
  props: {
    isSize: 'big',
  },
});

export const smailImg = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: imgProfileAtom,
  props: {
    isSize: 'smail',
  },
});
