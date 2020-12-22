import { FormProfieOrgan } from './form-profie.organ';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Organs/Form Profie'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: FormProfieOrgan,
  props: {

  }
})