import * as frame from "tns-core-modules/ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";

export class HomeViewModel extends Observable {
  players: ObservableArray<any>;

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

    this.players = new ObservableArray([
      { name: "1:  Professor Longfellow" },
      { name: "2:  Father Rhinehardt" },
      { name: "3:  Darrin 'Flash' Williams" },
      { name: "4:  Ox Bellows" },
      { name: "5:  Brandon Jaspers" },
      { name: "6:  Peter Akimoto" },
      { name: "7:  Zoe Ingstrom" },
      { name: "8:  Missy Dubourde" },
      { name: "9:  Madam Zostra" },
      { name: "10: Vivian Lopez" },
      { name: "11: Jenny LeClerc" },
      { name: "12: Heather Granville" }
    ]);
  }
}
