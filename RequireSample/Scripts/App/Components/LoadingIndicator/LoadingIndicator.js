define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicatorViewModel = (function () {
        function LoadingIndicatorViewModel(params) {
        }
        LoadingIndicatorViewModel.prototype.Show = function () {
            $(".loading-backdrop").fadeIn("fast");
        };
        return LoadingIndicatorViewModel;
    }());
    exports.LoadingIndicatorViewModel = LoadingIndicatorViewModel;
    var LoadingIndicatorComponent = (function () {
        function LoadingIndicatorComponent() {
            return {
                viewModel: {
                    createViewModel: function (params, componentInfo) {
                        if (params.createViewModel)
                            return params.createViewModel();
                        else
                            return new LoadingIndicatorViewModel(params);
                    }
                },
                template: { require: "text!App/Components/LoadingIndicator/LoadingIndicatorView.html" }
            };
        }
        return LoadingIndicatorComponent;
    }());
    exports.LoadingIndicatorComponent = LoadingIndicatorComponent;
});
//# sourceMappingURL=LoadingIndicator.js.map