import { RdAuthorContentPopupNotiReportOrgan } from './rd-author-content-popup-noti-report.organ';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Organs/Rd Author Content Popup Noti Report'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorContentPopupNotiReportOrgan,
  props: {

  }
})