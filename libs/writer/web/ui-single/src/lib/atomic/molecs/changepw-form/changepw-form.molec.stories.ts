import { ChangepwFormMolec } from './changepw-form.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Changepw Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: ChangepwFormMolec,
  props: {

  }
})