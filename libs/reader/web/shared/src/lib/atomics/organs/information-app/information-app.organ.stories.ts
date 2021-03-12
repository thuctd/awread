import { InformationAppOrgan } from './information-app.organ';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Information App'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: InformationAppOrgan,
  props: {

  }
})