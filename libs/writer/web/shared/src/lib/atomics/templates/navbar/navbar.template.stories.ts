import { NavbarTemplate } from "./navbar.template";
import { WriterWebSharedAtomicModule } from "../../writer-web-shared-atomic.module";
import { action } from "@storybook/addon-actions";

export default {
  title: "Shared/Templates/Navbar",
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: NavbarTemplate,
  props: {
    searchEvent: action("Search result"),
  },
});
