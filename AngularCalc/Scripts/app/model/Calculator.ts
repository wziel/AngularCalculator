class Calculator {
    static operationDic = {
        "+": new AddOperation(),
        "C": new ClearOperation(),
        "-": new SubtractOperation(),
        "=": new NoOperation(),
        "/": new DivideOperation(),
        "+/-": new ChangeSignOperation(),
        "*": new MultiplyOperation(),
        "sqrt": new SqrtOperation(),
        "%": new PercentageOperation(),
    };

    private stateResolver = new StateResolver();
    private state: State;

    text: string;
    isDecimalPointEnalbe: boolean;
    isError: boolean;

    constructor() {
        this.reset();
    }

    handleCommand(command: string ) {
        if (!this.validateCommand(command)) {
            throw "Invalid command";
        }
        if (this.isError) {
            this.reset();
        }
        try {
            this.handleCommandUnsafe(command);
        }
        catch (e) {
            this.isError = true;
            this.text = "Error";
            this.isDecimalPointEnalbe = false;
        }
    }

    private handleCommandUnsafe(command: string): void {
        var commandAsInt = parseInt(command);
        if (!isNaN(commandAsInt)) {
            this.state = this.state.append(command);
        }
        else if (command === ".") {
            this.state = this.state.setDecimalPoint();
            this.isDecimalPointEnalbe = false;
        }
        else {
            var operation = Calculator.operationDic[command];
            this.state = this.stateResolver.next(this.state, operation);
            this.isDecimalPointEnalbe = true;
        }
        this.text = this.state.getText();
    }

    private validateCommand(command: string): boolean {
        if (this.isError && command !== "C") {
            return false;
        }
        if (!this.isDecimalPointEnalbe && command === ".") {
            return false;
        }
        if (!isNaN(parseInt(command)) || command == "." || Calculator.operationDic[command] != null) {
            return true;
        }
        return false;
    }

    private reset() {
        this.isError = false;
        this.isDecimalPointEnalbe = true;
        this.text = "0";
        this.state = new InsertOperandState(new StateParams(null, 0, ""));
    }
}