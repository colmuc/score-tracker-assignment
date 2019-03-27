import * as frame from "tns-core-modules/ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;
  private numberOfPlayers: number;

  constructor() {
    super();

    // Initialize default values.
    this._counter = 42;
    this.updateMessage();
  }

  onCloseDrawerTap() {
    let sideDrawer: RadSideDrawer = <RadSideDrawer>(
      frame.topmost().getViewById("sideDrawer")
    );
    sideDrawer.closeDrawer();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange("message", value);
    }
  }

  onTap() {
    this._counter--;
    this.updateMessage();
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message =
        "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
      this.message = `${this._counter} taps left`;
    }
  }
}
