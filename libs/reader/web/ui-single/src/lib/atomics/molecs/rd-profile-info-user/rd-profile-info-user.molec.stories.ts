import { RdProfileInfoUserMolec } from './rd-profile-info-user.molec';
import { ReaderWebUiSingleAtomicModule } from '../../reader-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Rd Profile Info User'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiSingleAtomicModule]
  },
  component: RdProfileInfoUserMolec,
  props: {

  }
})