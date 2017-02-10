var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChangeSignOperation = (function (_super) {
    __extends(ChangeSignOperation, _super);
    function ChangeSignOperation() {
        _super.apply(this, arguments);
    }
    ChangeSignOperation.prototype.perform = function (arg) {
        return -arg;
    };
    return ChangeSignOperation;
}(UnaryOperation));
//# sourceMappingURL=ChangeSignOperation.js.map