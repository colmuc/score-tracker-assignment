import * as frame from "tns-core-modules/ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "tns-core-modules/data/observable";

export class HomeViewModel extends Observable {
  mainContentText: string =
    "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
    " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
  onOpenDrawerTap() {
    let sideDrawer: RadSideDrawer = <RadSideDrawer>(
      frame.topmost().getViewById("sideDrawer")
    );
    sideDrawer.showDrawer();
  }
  onCloseDrawerTap() {
    let sideDrawer: RadSideDrawer = <RadSideDrawer>(
      frame.topmost().getViewById("sideDrawer")
    );
    sideDrawer.closeDrawer();
  }

  constructor() {
    super();
  }
}
