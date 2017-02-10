var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PercentageOperation = (function (_super) {
    __extends(PercentageOperation, _super);
    function PercentageOperation() {
        _super.apply(this, arguments);
    }
    PercentageOperation.prototype.perform = function (arg) {
        return arg / 100;
    };
    return PercentageOperation;
}(UnaryOperation));
//# sourceMappingURL=PercentageOperation.js.map