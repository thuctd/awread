import { ReviewItemMolec } from './review-item.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Market/Molecs/Review Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: ReviewItemMolec,
  props: {
    submitEvent: action('account complete')
  }
})