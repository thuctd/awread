import { WrtProfileEditFormMolec } from './wrt-profile-edit-form.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Wrt Profile Edit Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileEditFormMolec,
  props: {},
});
