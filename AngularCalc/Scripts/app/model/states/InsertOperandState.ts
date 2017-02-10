class InsertOperandState extends State {

    append(c: string): State {
        this.stateParams.rightOperand += c;
        return this;
    }

    getText(): string {
        return this.stateParams.rightOperand;
    }

    nextUnary(operation: UnaryOperation): State {
        this.performPendingOperation();
        this.stateParams.leftOperand = operation.perform(this.stateParams.leftOperand);
        return new ShowResultState(this.stateParams);
    }

    nextBinary(operation: BinaryOperation): State {
        this.performPendingOperation();
        this.stateParams.pendingOpration = operation;
        return new WaitForSecondOperandState(this.stateParams);
    }

    private performPendingOperation(): void {
        var newValue = this.stateParams.pendingOpration == null ? this.stateParams.getRightOperandAsNumber()
            : this.stateParams.pendingOpration.perform(this.stateParams.leftOperand, this.stateParams.getRightOperandAsNumber());
        this.stateParams.leftOperand = newValue;
        this.stateParams.rightOperand = "";
        this.stateParams.pendingOpration = null;
    }
}