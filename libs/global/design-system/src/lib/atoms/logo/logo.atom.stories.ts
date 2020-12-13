import { LogoAtom } from './logo.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';
export default {
  title: 'Design System/Atoms/Logo'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule ]
  },
  component: LogoAtom,
  props: {

  }
})