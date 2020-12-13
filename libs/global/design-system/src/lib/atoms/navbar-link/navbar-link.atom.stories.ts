import { NavbarLinkAtom } from './navbar-link.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'design system/atoms/navbar link'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: NavbarLinkAtom,
  props: {

  }
})

export const active = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: NavbarLinkAtom,
  props: {
    active: true
  }
})

export const editable = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: NavbarLinkAtom,
  props: {
    active: true,
    name: text('Tên của link', 'Gâu to Facebook')
  }
})