import { LeftNavOrgan } from './left-nav.organ';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Left Nav'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule]
  },
  component: LeftNavOrgan,
  props: {

  }
})