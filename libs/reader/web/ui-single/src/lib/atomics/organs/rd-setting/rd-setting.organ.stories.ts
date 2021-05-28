import { RdSettingOrgan } from './rd-setting.organ';
import { ReaderWebUiSingleAtomicModule } from '../../reader-web-ui-single-atomic.module';

export default {
  title: 'Single/Organs/Rd Setting'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiSingleAtomicModule]
  },
  component: RdSettingOrgan,
  props: {

  }
})