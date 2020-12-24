import { GroupIconNavleftMolec } from "./group-icon-navleft.molec";
import { WriterWebSharedAtomicModule } from "../../writer-web-shared-atomic.module";

export default {
  title: "Shared/Molecs/Group Icon Navleft",
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule],
  },
  component: GroupIconNavleftMolec,
  props: {},
});
