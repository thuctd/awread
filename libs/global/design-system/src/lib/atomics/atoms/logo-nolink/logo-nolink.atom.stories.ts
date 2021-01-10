import { LogoNolinkAtom } from './logo-nolink.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Logo Nolink'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: LogoNolinkAtom,
  props: {

  }
})