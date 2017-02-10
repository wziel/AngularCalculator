var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DivideOperation = (function (_super) {
    __extends(DivideOperation, _super);
    function DivideOperation() {
        _super.apply(this, arguments);
    }
    DivideOperation.prototype.perform = function (leftArg, rightArg) {
        if (rightArg === 0) {
            throw "Divide by zero exception";
        }
        return leftArg / rightArg;
    };
    return DivideOperation;
}(BinaryOperation));
//# sourceMappingURL=DivideOperation.js.map