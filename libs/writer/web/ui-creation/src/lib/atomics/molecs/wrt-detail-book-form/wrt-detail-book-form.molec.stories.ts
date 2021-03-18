import { WrtDetailBookFormMolec } from './wrt-detail-book-form.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Book Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtDetailBookFormMolec,
  props: {},
});
