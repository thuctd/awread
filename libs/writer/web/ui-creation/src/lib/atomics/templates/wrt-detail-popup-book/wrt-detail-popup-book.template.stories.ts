import { WrtDetailPopupBookTemplate } from './wrt-detail-popup-book.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/Wrt Detail Popup Book',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtDetailPopupBookTemplate,
  props: {},
});
