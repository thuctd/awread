import { CommentBookReadOrgan } from './comment-book-read.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Comment Book Read'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: CommentBookReadOrgan,
  props: {

  }
})