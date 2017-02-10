var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClearOperation = (function (_super) {
    __extends(ClearOperation, _super);
    function ClearOperation() {
        _super.apply(this, arguments);
    }
    ClearOperation.prototype.perform = function (arg) {
        return 0;
    };
    return ClearOperation;
}(UnaryOperation));
//# sourceMappingURL=ClearOperation.js.map