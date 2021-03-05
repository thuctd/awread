import { RdAuthorPopupListFollowersTemplate } from './rd-author-popup-list-followers.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup List Followers',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule],
  },
  component: RdAuthorPopupListFollowersTemplate,
  props: {},
});
