import { RdAuthorContentPopupBlockOrgan } from './rd-author-content-popup-block.organ';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Organs/Rd Author Content Popup Block'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorContentPopupBlockOrgan,
  props: {

  }
})