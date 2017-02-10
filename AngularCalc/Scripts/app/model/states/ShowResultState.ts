class ShowResultState extends State {


    append(c: string): State {
        this.stateParams.leftOperand = 0;
        this.stateParams.rightOperand = c;
        return new InsertOperandState(this.stateParams);
    }

    getText(): string {
        return this.stateParams.leftOperand.toString();
    }

    nextUnary(operation: UnaryOperation): State {
        this.stateParams.leftOperand = operation.perform(this.stateParams.leftOperand);
        return this;
    }

    nextBinary(operation: BinaryOperation): State {
        this.stateParams.pendingOpration = operation;
        return new InsertOperandState(this.stateParams);
    }
}