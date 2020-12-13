import { CheckBtnAtom } from './check-btn.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';

export default {
  title: 'Design System/Atoms/Check Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: CheckBtnAtom,
  props: {

  }
})