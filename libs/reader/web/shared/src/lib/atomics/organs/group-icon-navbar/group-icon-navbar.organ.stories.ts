import { GroupIconNavbarOrgan } from './group-icon-navbar.organ';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Group Icon Navbar'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: GroupIconNavbarOrgan,
  props: {

  }
})