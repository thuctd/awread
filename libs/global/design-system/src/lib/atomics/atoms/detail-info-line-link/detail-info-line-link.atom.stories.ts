import { DetailInfoLineLinkAtom } from './detail-info-line-link.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/text/Detail Info Line Link'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: DetailInfoLineLinkAtom,
  props: {

  }
})
