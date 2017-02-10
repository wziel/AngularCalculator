class PercentageOperation extends UnaryOperation {
    perform(arg: number): number {
        return arg / 100;
    }
}