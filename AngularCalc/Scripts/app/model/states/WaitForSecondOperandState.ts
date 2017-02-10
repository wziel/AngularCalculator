class WaitForSecondOperandState extends State {


    append(c: string): State {
        this.stateParams.rightOperand = c;
        return new InsertOperandState(this.stateParams);
    }

    getText(): string {
        return this.stateParams.leftOperand.toString();
    }

    nextUnary(operation: UnaryOperation): State {
        this.stateParams.leftOperand = operation.perform(this.stateParams.leftOperand);
        return new ShowResultState(this.stateParams);
    }

    nextBinary(operation: BinaryOperation): State {
        this.stateParams.pendingOpration = operation;
        return this;
    }
}