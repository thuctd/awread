import { RdAuthorAvatarItemListMbMolec } from './rd-author-avatar-item-list-mb.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Avatar Item List Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorAvatarItemListMbMolec,
  props: {

  }
})