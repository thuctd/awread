import { ProfileChangePasswordFormMolec } from './profile-change-password-form.molec';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Molecs/Profile Change Password Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: ProfileChangePasswordFormMolec,
  props: {

  }
})