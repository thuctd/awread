import { DropdownLinkAtom } from './dropdown-link.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/textLink/Dropdown Link',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: DropdownLinkAtom,
  props: {},
});
