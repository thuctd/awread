import { RdAuthorPopupNotiReportTemplate } from './rd-author-popup-noti-report.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup Noti Report'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorPopupNotiReportTemplate,
  props: {

  }
})