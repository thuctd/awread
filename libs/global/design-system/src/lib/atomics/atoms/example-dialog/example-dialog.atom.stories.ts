import { ExampleDialogAtom } from './example-dialog.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Modals/Example Dialog',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: ExampleDialogAtom,
  props: {},
});
