var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultiplyOperation = (function (_super) {
    __extends(MultiplyOperation, _super);
    function MultiplyOperation() {
        _super.apply(this, arguments);
    }
    MultiplyOperation.prototype.perform = function (leftArg, rightArg) {
        return leftArg * rightArg;
    };
    return MultiplyOperation;
}(BinaryOperation));
//# sourceMappingURL=MultiplyOperation.js.map