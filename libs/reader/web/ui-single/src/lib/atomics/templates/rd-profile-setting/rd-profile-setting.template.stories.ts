import { RdProfileSettingTemplate } from './rd-profile-setting.template';
import { ReaderWebUiSingleAtomicModule } from '../../reader-web-ui-single-atomic.module';

export default {
  title: 'Single/Templates/Rd Profile Setting'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiSingleAtomicModule]
  },
  component: RdProfileSettingTemplate,
  props: {

  }
})