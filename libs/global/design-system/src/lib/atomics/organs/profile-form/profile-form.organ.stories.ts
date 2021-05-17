import { ProfileFormOrgan } from './profile-form.organ';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Organs/Profile Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: ProfileFormOrgan,
  props: {

  }
})