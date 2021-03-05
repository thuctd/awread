import { RdAuthorPopupHeaderAtom } from './rd-author-popup-header.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/title/Rd Author Popup Header',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdAuthorPopupHeaderAtom,
  props: {},
});
