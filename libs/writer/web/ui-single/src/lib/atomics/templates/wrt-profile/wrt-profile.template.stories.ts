import { WrtProfileTemplate } from './wrt-profile.template';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Templates/Wrt Profile',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileTemplate,
  props: {},
});
