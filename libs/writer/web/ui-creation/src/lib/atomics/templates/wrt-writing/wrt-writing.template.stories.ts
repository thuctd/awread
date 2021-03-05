import { WrtWritingTemplate } from './wrt-writing.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';
import { MatDialogModule } from '@angular/material/dialog';

export default {
  title: 'Creation/Templates/Wrt Writing',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule, MatDialogModule],
  },
  component: WrtWritingTemplate,
  props: {},
});
