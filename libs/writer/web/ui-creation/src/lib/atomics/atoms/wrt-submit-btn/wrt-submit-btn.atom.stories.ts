import { WrtSubmitBtnAtom } from './wrt-submit-btn.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/Wrt Submit Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtSubmitBtnAtom,
  props: {

  }
})