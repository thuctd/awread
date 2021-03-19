import { WrtProfileChangeCoverTemplate } from './wrt-profile-change-cover.template';
import { WriterWebUiSingleAtomicModule } from '../../writer-web-ui-single-atomic.module';

export default {
  title: 'Single/Templates/Wrt Profile Change Cover',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiSingleAtomicModule],
  },
  component: WrtProfileChangeCoverTemplate,
  props: {},
});
