
export class MessageModalViewModel {


    constructor() {
        console.log("message-modal");
    }
}

export class MessageModalComponent {
    constructor() {
        return {
            viewModel: MessageModalViewModel,
            template: { require: "text!App/Components/MessageModal/MessageModalView.html"}
        }
    }
}