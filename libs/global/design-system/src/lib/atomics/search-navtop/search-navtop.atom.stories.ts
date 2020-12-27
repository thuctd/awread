import { FormControl } from "@angular/forms";
import { searchNavtopAtom } from "./search-navtop.atom";
import { GlobalDesignSystemAtomicModule } from "../../global-design-system-atomic.module";
import { action } from "@storybook/addon-actions";

export default {
  title: "Design System/Atoms/Search Navtop",
};

export const noData = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: searchNavtopAtom,
  props: {
    searchEvent: action("Search result"),
  },
});

export const withText = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: searchNavtopAtom,
  props: {
    control: new FormControl("Ngay ay vi ai ma doi thay"),
    searchEvent: action("Search result"),
  },
});
