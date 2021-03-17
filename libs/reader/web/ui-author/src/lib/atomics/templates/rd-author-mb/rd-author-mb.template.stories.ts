import { RdAuthorMbTemplate } from './rd-author-mb.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorMbTemplate,
  props: {

  }
})