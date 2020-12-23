import { EditprofileFormMolec } from './editprofile-form.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Editprofile Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: EditprofileFormMolec,
  props: {

  }
})