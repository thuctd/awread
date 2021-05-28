import { RdProfileInfoPersonalMolec } from './rd-profile-info-personal.molec';
import { ReaderWebUiSingleAtomicModule } from '../../reader-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Rd Profile Info Personal'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiSingleAtomicModule]
  },
  component: RdProfileInfoPersonalMolec,
  props: {

  }
})