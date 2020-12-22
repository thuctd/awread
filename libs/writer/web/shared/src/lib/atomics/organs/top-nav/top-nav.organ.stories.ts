import { TopNavOrgan } from "./top-nav.organ";
import { WriterWebSharedAtomicModule } from "../../writer-web-shared-atomic.module";
import { action } from "@storybook/addon-actions";

export default {
  title: "Shared/Organs/Top Nav",
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: TopNavOrgan,
  props: {
    searchEvent: action("Search result"),
  },
});
