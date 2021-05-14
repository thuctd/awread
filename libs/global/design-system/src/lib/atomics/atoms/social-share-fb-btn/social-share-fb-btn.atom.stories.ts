import { SocialShareFbBtnAtom } from './social-share-fb-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Social Share Fb Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: SocialShareFbBtnAtom,
  props: {

  }
})