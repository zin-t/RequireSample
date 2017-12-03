define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MessageModalViewModel = (function () {
        function MessageModalViewModel() {
            console.log("message-modal");
        }
        return MessageModalViewModel;
    }());
    exports.MessageModalViewModel = MessageModalViewModel;
    var MessageModalComponent = (function () {
        function MessageModalComponent() {
            return {
                viewModel: MessageModalViewModel,
                template: { require: "text!App/Components/MessageModal/MessageModalView.html" }
            };
        }
        return MessageModalComponent;
    }());
    exports.MessageModalComponent = MessageModalComponent;
});
//# sourceMappingURL=MessageModal.js.map