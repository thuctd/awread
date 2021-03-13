import { LinkAppOrgan } from './link-app.organ';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Link App'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: LinkAppOrgan,
  props: {

  }
})