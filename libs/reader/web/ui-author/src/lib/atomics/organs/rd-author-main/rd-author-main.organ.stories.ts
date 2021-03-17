import { RdAuthorMainOrgan } from './rd-author-main.organ';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Organs/Rd Author Main'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorMainOrgan,
  props: {

  }
})