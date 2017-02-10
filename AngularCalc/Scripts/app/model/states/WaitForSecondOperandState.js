var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WaitForSecondOperandState = (function (_super) {
    __extends(WaitForSecondOperandState, _super);
    function WaitForSecondOperandState() {
        _super.apply(this, arguments);
    }
    WaitForSecondOperandState.prototype.append = function (c) {
        this.stateParams.rightOperand = c;
        return new InsertOperandState(this.stateParams);
    };
    WaitForSecondOperandState.prototype.getText = function () {
        return this.stateParams.leftOperand.toString();
    };
    WaitForSecondOperandState.prototype.nextUnary = function (operation) {
        this.stateParams.leftOperand = operation.perform(this.stateParams.leftOperand);
        return new ShowResultState(this.stateParams);
    };
    WaitForSecondOperandState.prototype.nextBinary = function (operation) {
        this.stateParams.pendingOpration = operation;
        return this;
    };
    return WaitForSecondOperandState;
}(State));
//# sourceMappingURL=WaitForSecondOperandState.js.map