var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SqrtOperation = (function (_super) {
    __extends(SqrtOperation, _super);
    function SqrtOperation() {
        _super.apply(this, arguments);
    }
    SqrtOperation.prototype.perform = function (arg) {
        if (arg < 0) {
            throw "Sqrt from negative number exception";
        }
        return Math.sqrt(arg);
    };
    return SqrtOperation;
}(UnaryOperation));
//# sourceMappingURL=SqrtOperation.js.map