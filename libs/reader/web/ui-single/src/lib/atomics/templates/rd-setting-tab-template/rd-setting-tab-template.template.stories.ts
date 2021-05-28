import { RdSettingTabTemplateTemplate } from './rd-setting-tab-template.template';
import { ReaderWebUiSingleAtomicModule } from '../../reader-web-ui-single-atomic.module';

export default {
  title: 'Single/Templates/Rd Setting Tab Template'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiSingleAtomicModule]
  },
  component: RdSettingTabTemplateTemplate,
  props: {

  }
})