import { BreadcrumbLinkAtom } from './breadcrumb-link.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/textLink/Breadcrumb Link',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: BreadcrumbLinkAtom,
  props: {},
});
