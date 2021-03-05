import { WrtDetailPopupBookOrgan } from './wrt-detail-popup-book.organ';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Organs/Wrt Detail Popup Book',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtDetailPopupBookOrgan,
  props: {},
});
