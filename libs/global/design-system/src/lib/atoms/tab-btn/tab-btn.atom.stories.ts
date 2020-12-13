import { TabBtnAtom } from './tab-btn.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';

export default {
  title: 'Design System/Atoms/Tab Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: TabBtnAtom,
  props: {

  }
})