class ChangeSignOperation extends UnaryOperation {
    perform(arg: number): number {
        return -arg;
    }
}