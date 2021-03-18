import { RdAuthorPopupUnfollowTemplate } from './rd-author-popup-unfollow.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup Unfollow'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorPopupUnfollowTemplate,
  props: {

  }
})