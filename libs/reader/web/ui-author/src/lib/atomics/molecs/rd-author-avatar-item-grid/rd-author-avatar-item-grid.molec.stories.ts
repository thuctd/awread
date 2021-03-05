import { RdAuthorAvatarItemGridMolec } from './rd-author-avatar-item-grid.molec';
import { ReaderWebUiAuthorAtomicModule } from '../../reader-web-ui-author-atomic.module';

export default {
  title: 'Author/Molecs/Rd Author Avatar Item Grid'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthorAtomicModule]
  },
  component: RdAuthorAvatarItemGridMolec,
  props: {

  }
})