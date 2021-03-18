import { RdAuthorPopupUnfollowMbTemplate } from './rd-author-popup-unfollow-mb.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup Unfollow Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorPopupUnfollowMbTemplate,
  props: {

  }
})