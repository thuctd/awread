import { CreationSocialBtnAtom } from './creation-social-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Wrt Social Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: CreationSocialBtnAtom,
  props: {

  }
})
