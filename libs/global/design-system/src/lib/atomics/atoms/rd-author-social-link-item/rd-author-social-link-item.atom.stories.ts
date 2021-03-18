import { RdAuthorSocialLinkItemAtom } from './rd-author-social-link-item.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Images/image/Rd Author Social Link Item',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdAuthorSocialLinkItemAtom,
  props: {},
});
