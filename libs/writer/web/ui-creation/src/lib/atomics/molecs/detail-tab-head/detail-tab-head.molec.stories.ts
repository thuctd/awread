import { DetailTabHeadMolec } from './detail-tab-head.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Detail Tab Head'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: DetailTabHeadMolec,
  props: {

  }
})