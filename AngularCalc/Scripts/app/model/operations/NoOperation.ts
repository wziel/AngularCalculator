class NoOperation extends UnaryOperation {
    perform(arg: number): number {
        return arg;
    }
}