import { LogoAtom } from './logo.atom';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
export default {
  title: 'Auth/Atoms/Logo'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule ]
  },
  component: LogoAtom,
  props: {

  }
})