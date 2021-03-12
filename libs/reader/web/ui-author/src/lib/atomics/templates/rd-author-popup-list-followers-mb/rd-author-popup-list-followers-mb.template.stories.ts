import { RdAuthorPopupListFollowersMbTemplate } from './rd-author-popup-list-followers-mb.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup List Followers Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorPopupListFollowersMbTemplate,
  props: {

  }
})