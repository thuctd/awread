import { InputFormAtom } from './input-form.atom';
import { GlobalDesignSystemModule } from '../../global-design-system.module';

export default {
  title: 'Design System/Atoms/InputForm'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemModule]
  },
  component: InputFormAtom,
  props: {

  }
})