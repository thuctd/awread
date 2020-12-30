import { InfoFormMolec } from './info-form.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Info Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule]
  },
  component: InfoFormMolec,
  props: {

  }
})