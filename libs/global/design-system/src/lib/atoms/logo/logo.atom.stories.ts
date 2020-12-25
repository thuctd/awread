import { LogoAtom } from './logo.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Design System/Atoms/Logo'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule, RouterTestingModule]
  },
  component: LogoAtom,
  props: {

  }
})