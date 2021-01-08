import { SearchBookAtom } from './search-book.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';
import { FormControl } from '@angular/forms';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Atoms/Search Book',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: SearchBookAtom,
  props: {},
});

export const withText = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: SearchBookAtom,
  props: {
    control: new FormControl('Ngay ay vi ai ma doi thay'),
    searchEvent: action('Search result'),
  },
});
