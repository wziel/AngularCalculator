var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NoOperation = (function (_super) {
    __extends(NoOperation, _super);
    function NoOperation() {
        _super.apply(this, arguments);
    }
    NoOperation.prototype.perform = function (arg) {
        return arg;
    };
    return NoOperation;
}(UnaryOperation));
//# sourceMappingURL=NoOperation.js.map