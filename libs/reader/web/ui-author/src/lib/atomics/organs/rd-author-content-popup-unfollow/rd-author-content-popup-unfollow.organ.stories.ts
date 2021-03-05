import { RdAuthorContentPopupUnfollowOrgan } from './rd-author-content-popup-unfollow.organ';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Organs/Rd Author Content Popup Unfollow'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorContentPopupUnfollowOrgan,
  props: {

  }
})