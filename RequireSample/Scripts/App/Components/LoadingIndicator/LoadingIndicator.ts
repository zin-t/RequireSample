import ko = require("knockout");

export interface ILoadingIndicator {
    createViewModel?: any;
}

export class LoadingIndicatorViewModel {

    constructor(params: ILoadingIndicator) {
    }

    Show() {
        $(".loading-backdrop").fadeIn("fast");
    }
}

export class LoadingIndicatorComponent {
    constructor() {
        return {
            viewModel: {
                createViewModel: (params, componentInfo) => {
                    if (params.createViewModel)
                        return params.createViewModel();
                    else
                        return new LoadingIndicatorViewModel(params);
                }
            },
            template: { require: "text!App/Components/LoadingIndicator/LoadingIndicatorView.html"}
        }
    }
}