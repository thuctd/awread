import { RdAuthorPopupContentBlockAtom } from './rd-author-popup-content-block.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Modals/Rd Author Popup Content Block',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdAuthorPopupContentBlockAtom,
  props: {},
});
