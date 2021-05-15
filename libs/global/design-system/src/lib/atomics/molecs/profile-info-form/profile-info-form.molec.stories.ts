import { ProfileInfoFormMolec } from './profile-info-form.molec';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Molecs/Profile Info Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: ProfileInfoFormMolec,
  props: {

  }
})