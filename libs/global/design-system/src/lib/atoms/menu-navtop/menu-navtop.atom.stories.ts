import { MenuNavtopAtom } from "./menu-navtop.atom";
import { GlobalDesignSystemAtomicModule } from "../../global-design-system-atomic.module";
import { action } from "@storybook/addon-actions";
export default {
  title: "Design System/Atoms/Menu Navtop",
};

export const basic = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: MenuNavtopAtom,
  props: {},
});

export const menuOpen = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: MenuNavtopAtom,
  props: {
    isMenuOpen: true,
    signoutEvent: action("clicked signout event"),
  },
});
