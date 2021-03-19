import { WrtWritingPopupReadTemplate } from './wrt-writing-popup-read.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export default {
  title: 'Creation/Templates/Wrt Writing Popup Read',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule, MatDialogModule],
    providers: [
      { provide: MatDialogRef, useValue: {} },
      {
        provide: MAT_DIALOG_DATA,
        useValue: { title: 'Mùa lá rụng', content: 'Mùa thu lá vàng rơi, thu đi để lại lá vàng, anh đi để lại cho nàng thằng cu...' },
      },
    ],
  },

  component: WrtWritingPopupReadTemplate,
  props: {},
});
