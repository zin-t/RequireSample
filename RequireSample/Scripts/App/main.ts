import ko = require("knockout");
import $ = require("jquery");
import { ComponentRegistration } from "./ComponentRegistration";
import { LoadingIndicatorViewModel } from "./Components/LoadingIndicator/LoadingIndicator";


export class main {
    private loadingVM: LoadingIndicatorViewModel;
    private isVisble = ko.observable(false);

    constructor() {
        this.createLoadingIndicatorVM = this.createLoadingIndicatorVM.bind(this);
        this.showLoading = this.showLoading.bind(this);
        ComponentRegistration.registerComponents();
    }

    private showLoading() {
        this.loadingVM.Show();
        setTimeout(() => {
            $(".loading-backdrop").fadeOut("fast", () => {
                $("#messageModal").modal({ backdrop: "static", keyboard: false });
            });
        }, 3000);
    }

    private createLoadingIndicatorVM(): LoadingIndicatorViewModel {
        this.loadingVM = new LoadingIndicatorViewModel({  });
        return this.loadingVM;
    }
}

ko.applyBindings(new main());