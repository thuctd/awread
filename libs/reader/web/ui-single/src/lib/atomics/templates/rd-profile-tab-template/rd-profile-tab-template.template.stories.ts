import { RdProfileTabTemplateTemplate } from './rd-profile-tab-template.template';
import { ReaderWebUiSingleAtomicModule } from '../../reader-web-ui-single-atomic.module';

export default {
  title: 'Single/Templates/Rd Profile Tab Template'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiSingleAtomicModule]
  },
  component: RdProfileTabTemplateTemplate,
  props: {

  }
})