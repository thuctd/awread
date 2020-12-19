import { SocialMenuAtom } from './social-menu.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/Social Menu'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: SocialMenuAtom,
  props: {

  }
})