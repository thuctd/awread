import { RdAuthorProductOrgan } from './rd-author-product.organ';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Organs/Rd Author Product'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorProductOrgan,
  props: {

  }
})