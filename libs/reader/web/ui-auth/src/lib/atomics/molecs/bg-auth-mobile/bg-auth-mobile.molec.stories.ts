import { BgAuthMobileMolec } from './bg-auth-mobile.molec';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Bg Auth Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: BgAuthMobileMolec,
  props: {

  }
})