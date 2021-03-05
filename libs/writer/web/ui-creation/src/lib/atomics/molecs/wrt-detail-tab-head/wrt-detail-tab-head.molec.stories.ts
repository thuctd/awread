import { WrtDetailTabHeadMolec } from './wrt-detail-tab-head.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Tab Head',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtDetailTabHeadMolec,
  props: {},
});
