import { RdAuthorPopupUnblockMbTemplate } from './rd-author-popup-unblock-mb.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup Unblock Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorPopupUnblockMbTemplate,
  props: {

  }
})