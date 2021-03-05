import { RdAuthorBreadcrumbMolec } from './rd-author-breadcrumb.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Breadcrumb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorBreadcrumbMolec,
  props: {

  }
})