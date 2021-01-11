import { RdListPublicationDateAtom } from './rd-list-publication-date.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/text/Rd List Publication Date',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdListPublicationDateAtom,
  props: {},
});
