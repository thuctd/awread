import { RdAuthorListReportOrgan } from './rd-author-list-report.organ';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Organs/Rd Author List Report'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorListReportOrgan,
  props: {

  }
})