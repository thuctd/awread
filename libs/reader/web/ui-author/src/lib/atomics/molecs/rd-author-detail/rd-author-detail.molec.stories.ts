import { RdAuthorDetailMolec } from './rd-author-detail.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Detail'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorDetailMolec,
  props: {

  }
})