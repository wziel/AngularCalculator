class StateResolver {
    next(currentState: State, operation: Operation): State {
        if (operation instanceof UnaryOperation) {
            return currentState.nextUnary(<UnaryOperation>operation);
        }
        if (operation instanceof BinaryOperation) {
            return currentState.nextBinary(<BinaryOperation>operation);
        }
        throw "Operation type not recognized";
    }
}