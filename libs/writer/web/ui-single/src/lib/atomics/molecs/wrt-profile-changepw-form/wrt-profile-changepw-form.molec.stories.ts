import { WrtProfileChangepwFormMolec } from './wrt-profile-changepw-form.molec';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Molecs/Wrt Profile Changepw Form',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileChangepwFormMolec,
  props: {},
});
