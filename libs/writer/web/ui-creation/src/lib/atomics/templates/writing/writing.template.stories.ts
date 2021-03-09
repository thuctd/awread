import { WritingTemplate } from './writing.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';
import { MatDialogModule } from '@angular/material/dialog';

export default {
  title: 'Creation/Templates/Writing'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule, MatDialogModule]
  },
  component: WritingTemplate,
  props: {

  }
})