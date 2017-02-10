abstract class State {
    stateParams: StateParams;

    constructor(stateParams: StateParams) {
        this.stateParams = stateParams;
    }

    abstract append(c: string): State;
    abstract getText(): string;
    abstract nextUnary(operation: UnaryOperation): State;
    abstract nextBinary(operation: BinaryOperation): State;

    setDecimalPoint(): State {
        this.stateParams.rightOperand += ".";
        return new InsertOperandState(this.stateParams);
    }
}