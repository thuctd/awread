import { RdAuthorListBtnsMbMolec } from './rd-author-list-btns-mb.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author List Btns Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorListBtnsMbMolec,
  props: {

  }
})