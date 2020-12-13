import { LinkBtnAtom } from './link-btn.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';

export default {
  title: 'Design System/Atoms/ForgotBtn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: LinkBtnAtom,
  props: {

  }
})