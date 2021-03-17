import { RdAuthorFollowerItemMolec } from './rd-author-follower-item.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Follower Item',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule],
  },
  component: RdAuthorFollowerItemMolec,
  props: {},
});
