import { WrtDetailActMolec } from './wrt-detail-act.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Act',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtDetailActMolec,
  props: {},
});
