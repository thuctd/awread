import { ImgSAtom } from './img-s.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Img S'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: ImgSAtom,
  props: {

  }
})