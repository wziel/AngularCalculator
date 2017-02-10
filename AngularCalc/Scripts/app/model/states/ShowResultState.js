var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ShowResultState = (function (_super) {
    __extends(ShowResultState, _super);
    function ShowResultState() {
        _super.apply(this, arguments);
    }
    ShowResultState.prototype.append = function (c) {
        this.stateParams.leftOperand = 0;
        this.stateParams.rightOperand = c;
        return new InsertOperandState(this.stateParams);
    };
    ShowResultState.prototype.getText = function () {
        return this.stateParams.leftOperand.toString();
    };
    ShowResultState.prototype.nextUnary = function (operation) {
        this.stateParams.leftOperand = operation.perform(this.stateParams.leftOperand);
        return this;
    };
    ShowResultState.prototype.nextBinary = function (operation) {
        this.stateParams.pendingOpration = operation;
        return new InsertOperandState(this.stateParams);
    };
    return ShowResultState;
}(State));
//# sourceMappingURL=ShowResultState.js.map