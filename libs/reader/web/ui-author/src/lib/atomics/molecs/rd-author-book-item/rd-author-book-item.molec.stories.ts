import { RdAuthorBookItemMolec } from './rd-author-book-item.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Book Item',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule],
  },
  component: RdAuthorBookItemMolec,
  props: {},
});
