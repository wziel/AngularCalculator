var Calculator = (function () {
    function Calculator() {
        this.stateResolver = new StateResolver();
        this.reset();
    }
    Calculator.prototype.handleCommand = function (command) {
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
    };
    Calculator.prototype.handleCommandUnsafe = function (command) {
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
    };
    Calculator.prototype.validateCommand = function (command) {
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
    };
    Calculator.prototype.reset = function () {
        this.isError = false;
        this.isDecimalPointEnalbe = true;
        this.text = "0";
        this.state = new InsertOperandState(new StateParams(null, 0, ""));
    };
    Calculator.operationDic = {
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
    return Calculator;
}());
//# sourceMappingURL=Calculator.js.map