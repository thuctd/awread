import { WrtRulePopupTemplate } from './wrt-rule-popup.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/Wrt Rule Popup'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtRulePopupTemplate,
  props: {

  }
})