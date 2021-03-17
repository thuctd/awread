import { RdAuthorTabPageMbOrgan } from './rd-author-tab-page-mb.organ';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Organs/Rd Author Tab Page Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorTabPageMbOrgan,
  props: {

  }
})