class SqrtOperation extends UnaryOperation {
    perform(arg: number): number {
        if (arg < 0) {
            throw "Sqrt from negative number exception";
        }
        return Math.sqrt(arg);
    }
}