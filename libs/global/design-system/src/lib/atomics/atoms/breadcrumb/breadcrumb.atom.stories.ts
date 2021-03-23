import { BreadcrumbAtom } from './breadcrumb.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/textLink/Breadcrumb',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: BreadcrumbAtom,
  props: {},
});
