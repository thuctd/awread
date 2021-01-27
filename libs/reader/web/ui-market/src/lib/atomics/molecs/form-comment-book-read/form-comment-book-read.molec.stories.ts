import { FormCommentBookReadMolec } from './form-comment-book-read.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Form Comment Book Read'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: FormCommentBookReadMolec,
  props: {

  }
})