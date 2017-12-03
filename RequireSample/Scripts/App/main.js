define(["require", "exports", "knockout", "jquery", "./ComponentRegistration", "./Components/LoadingIndicator/LoadingIndicator"], function (require, exports, ko, $, ComponentRegistration_1, LoadingIndicator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var main = (function () {
        function main() {
            this.isVisble = ko.observable(false);
            this.createLoadingIndicatorVM = this.createLoadingIndicatorVM.bind(this);
            this.showLoading = this.showLoading.bind(this);
            ComponentRegistration_1.ComponentRegistration.registerComponents();
        }
        main.prototype.showLoading = function () {
            this.loadingVM.Show();
            setTimeout(function () {
                $(".loading-backdrop").fadeOut("fast", function () {
                    $("#messageModal").modal({ backdrop: "static", keyboard: false });
                });
            }, 3000);
        };
        main.prototype.createLoadingIndicatorVM = function () {
            this.loadingVM = new LoadingIndicator_1.LoadingIndicatorViewModel({});
            return this.loadingVM;
        };
        return main;
    }());
    exports.main = main;
    ko.applyBindings(new main());
});
//# sourceMappingURL=main.js.map