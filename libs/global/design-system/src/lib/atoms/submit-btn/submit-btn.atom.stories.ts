import { SubmitBtnAtom } from './submit-btn.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';

export default {
  title: 'Design System/Atoms/Submit Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: SubmitBtnAtom,
  props: {

  }
})