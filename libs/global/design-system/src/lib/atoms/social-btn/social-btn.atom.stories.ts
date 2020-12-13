import { SocialBtnAtom } from './social-btn.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';

export default {
  title: 'Design System/Atoms/Social Btn'
}

export const facebook = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: SocialBtnAtom,
  props: {

  }
})
export const google = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: SocialBtnAtom,
  props: {
    provider: 'google'
  }
})