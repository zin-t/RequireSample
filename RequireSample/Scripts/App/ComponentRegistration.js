define(["require", "exports", "knockout", "./Components/MessageModal/MessageModal", "./Components/LoadingIndicator/LoadingIndicator"], function (require, exports, ko, MessageModal_1, LoadingIndicator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentRegistration = (function () {
        function ComponentRegistration() {
        }
        return ComponentRegistration;
    }());
    ComponentRegistration.registerComponents = function () {
        ko.components.register("message-modal", new MessageModal_1.MessageModalComponent());
        ko.components.register("loading-indicator", new LoadingIndicator_1.LoadingIndicatorComponent());
    };
    exports.ComponentRegistration = ComponentRegistration;
});
//# sourceMappingURL=ComponentRegistration.js.map