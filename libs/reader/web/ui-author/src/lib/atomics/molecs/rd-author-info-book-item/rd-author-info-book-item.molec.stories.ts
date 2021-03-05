import { RdAuthorInfoBookItemMolec } from './rd-author-info-book-item.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Info Book Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorInfoBookItemMolec,
  props: {

  }
})