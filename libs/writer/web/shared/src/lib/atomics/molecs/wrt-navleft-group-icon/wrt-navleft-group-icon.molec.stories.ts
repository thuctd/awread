import { WrtNavleftGroupIconMolec } from './wrt-navleft-group-icon.molec';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Wrt Navleft Group Icon',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: WrtNavleftGroupIconMolec,
  props: {},
});
