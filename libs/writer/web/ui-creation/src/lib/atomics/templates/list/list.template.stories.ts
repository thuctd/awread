import { ListTemplate } from './list.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/List',
};

export const noStory = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: ListTemplate,
  props: {},
});

export const showStory = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: ListTemplate,
  props: {
    books: [
      {
        title: 'haahah',
        bookid: '1',
        updatedat: '2021-02-04',
        status: 'DRAFT',
        totalChapterCountPublished: 1,
        totalChapterCount: 1,
        categoryname: 'huhuuhu',
      },
      {
        title: 'hihihi',
        bookid: '2',
        updatedat: '2021-02-06',
        status: 'DRAFT',
        totalChapterCountPublished: 2,
        totalChapterCount: 2,
        categoryname: 'hhuhuhuh',
      },
      {
        title: 'hehehe',
        bookid: '3',
        updatedat: '2021-02-06',
        status: 'DRAFT',
        totalChapterCountPublished: 2,
        totalChapterCount: 2,
        categoryname: 'hhuhuhuh',
      },
    ],
  },
});
