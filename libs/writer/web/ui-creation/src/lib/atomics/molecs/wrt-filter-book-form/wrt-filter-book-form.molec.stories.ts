import { WrtFilterBookFormMolec } from './wrt-filter-book-form.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Filter Book Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtFilterBookFormMolec,
  props: {

  }
})