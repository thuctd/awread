import { WrtNavleftOrgan } from './wrt-navleft.organ';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Wrt Navleft',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: WrtNavleftOrgan,
  props: {},
});
