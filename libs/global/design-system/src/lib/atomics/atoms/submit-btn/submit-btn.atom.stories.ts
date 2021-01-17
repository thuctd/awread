import { SubmitBtnAtom } from './submit-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Design System/Atoms/Buttons/button/Submit Btn',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: SubmitBtnAtom,
  props: {
    btnClicked: action('submitEvent'),
  },
});
