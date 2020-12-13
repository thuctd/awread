import { TabHeadMolec } from './tab-head.molec';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/TabHead'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: TabHeadMolec,
  props: {

  }
})