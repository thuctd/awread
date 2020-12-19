import { InputFormProfileAtom } from './input-form-profile.atom';
import { FormControl } from '@angular/forms';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Input Form Profile',
};

export const basic = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: InputFormProfileAtom,
  props: {},
});

export const withText = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: InputFormProfileAtom,
  props: {
    control: new FormControl('Ha Thanh Tung'),
  },
});
