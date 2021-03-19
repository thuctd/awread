import { WrtDetailLinkBtnsMolec } from './wrt-detail-link-btns.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Link Btns',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtDetailLinkBtnsMolec,
  props: {},
});
