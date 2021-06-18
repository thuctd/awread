import { WrtRulePopupOrgan } from './wrt-rule-popup.organ';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Organs/Wrt Rule Popup'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtRulePopupOrgan,
  props: {

  }
})