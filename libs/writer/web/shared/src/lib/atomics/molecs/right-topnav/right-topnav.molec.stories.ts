import { action } from "@storybook/addon-actions";
import { RightTopnavMolec } from "./right-topnav.molec";
import { WriterWebSharedAtomicModule } from "../../writer-web-shared-atomic.module";

export default {
  title: "Shared/Molecs/Right Topnav",
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: RightTopnavMolec,
  props: {
    searchEvent: action("Search result"),
  },
});
