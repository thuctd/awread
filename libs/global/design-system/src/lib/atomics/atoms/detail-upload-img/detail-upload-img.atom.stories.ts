import { DetailUploadImgAtom } from './detail-upload-img.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Images/image/Detail Upload Img',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: DetailUploadImgAtom,
  props: {},
});
