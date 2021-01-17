import { faEye, faHome, faComments } from '@fortawesome/free-solid-svg-icons';
import { IconTextAtom } from './icon-text.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Images/icon/Icon Text',
};

export const View = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: IconTextAtom,
  props: {},
});

export const Comment = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: IconTextAtom,
  props: {
    icon: faComments,
    title: '696969k',
  },
});

export const ViewBig = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: IconTextAtom,
  props: {
    isSize: 2,
  },
});
