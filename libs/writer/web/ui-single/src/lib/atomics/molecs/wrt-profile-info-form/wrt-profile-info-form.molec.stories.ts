import { WrtProfileInfoFormMolec } from './wrt-profile-info-form.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Wrt Profile Info Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileInfoFormMolec,
  props: {},
});
