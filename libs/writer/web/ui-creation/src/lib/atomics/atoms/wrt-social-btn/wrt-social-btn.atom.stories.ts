import { WrtSocialBtnAtom } from './wrt-social-btn.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/Wrt Social Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtSocialBtnAtom,
  props: {

  }
})