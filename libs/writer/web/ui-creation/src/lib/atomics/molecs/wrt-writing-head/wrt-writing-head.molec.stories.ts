import { WrtWritingHeadMolec } from './wrt-writing-head.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Writing Head',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtWritingHeadMolec,
  props: {},
});
