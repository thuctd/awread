import { WrtListStoriesMolec } from './wrt-list-stories.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt List Stories',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtListStoriesMolec,
  props: {},
});
