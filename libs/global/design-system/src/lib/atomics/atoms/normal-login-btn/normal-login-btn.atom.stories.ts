import { NormalLoginBtn } from './normal-login-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Design System/Atoms/Buttons/button/Normal Login Btn',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: NormalLoginBtn,
  props: {
    btnClicked: action('submitEvent'),
  },
});
