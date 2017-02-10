class DivideOperation extends BinaryOperation {
    perform(leftArg: number, rightArg: number): number {
        if (rightArg === 0) {
            throw "Divide by zero exception";
        }
        return leftArg / rightArg;
    }
}