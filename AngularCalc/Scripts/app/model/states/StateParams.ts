class StateParams {
    pendingOpration: BinaryOperation;
    leftOperand: number;
    rightOperand: string;

    constructor(lastOperation: BinaryOperation, leftOperand: number, rightOperand: string) {
        this.pendingOpration = lastOperation;
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
    }

    getRightOperandAsNumber() : number {
        var rightOperandAsNumber = parseFloat(this.rightOperand);
        if (isNaN(rightOperandAsNumber)) {
            return 0;
        }
        return rightOperandAsNumber;
    }

    getRightOperand() : string {
        return (this.rightOperand == null ? "0" : this.rightOperand);
    }
}