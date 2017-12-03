import ko = require("knockout");

import { MessageModalComponent } from "./Components/MessageModal/MessageModal";
import { LoadingIndicatorComponent } from "./Components/LoadingIndicator/LoadingIndicator";

export class ComponentRegistration {
    static registerComponents = () => {
        ko.components.register("message-modal", new MessageModalComponent());
        ko.components.register("loading-indicator", new LoadingIndicatorComponent());
    }
}