import { DownloadAppMolec } from './download-app.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Download App'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: DownloadAppMolec,
  props: {

  }
})