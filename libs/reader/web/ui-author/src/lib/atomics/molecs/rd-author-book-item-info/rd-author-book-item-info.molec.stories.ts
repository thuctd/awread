import { RdAuthorBookItemInfoMolec } from './rd-author-book-item-info.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Book Item Info',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule],
  },
  component: RdAuthorBookItemInfoMolec,
  props: {},
});
