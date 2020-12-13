import { AuthBgAtom } from './auth-bg.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';

export default {
  title: 'Design System/Atoms/Auth Bg'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: AuthBgAtom,
  props: {

  }
})