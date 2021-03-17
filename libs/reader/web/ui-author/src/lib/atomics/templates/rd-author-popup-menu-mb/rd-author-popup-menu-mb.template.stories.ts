import { RdAuthorPopupMenuMbTemplate } from './rd-author-popup-menu-mb.template';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Templates/Rd Author Popup Menu Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorPopupMenuMbTemplate,
  props: {

  }
})