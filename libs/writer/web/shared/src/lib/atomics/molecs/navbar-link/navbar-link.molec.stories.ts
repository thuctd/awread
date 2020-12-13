import { NavbarLinkMolec } from './navbar-link.molec';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'shared/molecs/navbar link'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule]
  },
  component: NavbarLinkMolec,
  props: {

  }
})