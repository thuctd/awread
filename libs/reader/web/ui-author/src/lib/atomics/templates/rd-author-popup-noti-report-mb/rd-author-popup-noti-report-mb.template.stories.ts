import { RdAuthorPopupNotiReportMbTemplate } from './rd-author-popup-noti-report-mb.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup Noti Report Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorPopupNotiReportMbTemplate,
  props: {

  }
})