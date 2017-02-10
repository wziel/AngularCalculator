var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SubtractOperation = (function (_super) {
    __extends(SubtractOperation, _super);
    function SubtractOperation() {
        _super.apply(this, arguments);
    }
    SubtractOperation.prototype.perform = function (leftArg, rightArg) {
        return leftArg - rightArg;
    };
    return SubtractOperation;
}(BinaryOperation));
//# sourceMappingURL=SubtractOperation.js.map