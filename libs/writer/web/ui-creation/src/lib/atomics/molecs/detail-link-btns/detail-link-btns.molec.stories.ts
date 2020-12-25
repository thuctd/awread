import { DetailLinkBtnsMolec } from './detail-link-btns.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Detail Link Btns'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: DetailLinkBtnsMolec,
  props: {

  }
})