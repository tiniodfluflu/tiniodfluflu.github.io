"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleLog = void 0;
var BattleLog = /** @class */ (function () {
    function BattleLog(enabled) {
        this.enabled = enabled;
    }
    BattleLog.prototype.logEvent = function (event) {
        if (this.enabled) {
            this.battleEvents.push(event);
        }
    };
    BattleLog.prototype.clearLog = function () {
        var length = this.battleEvents.length;
        this.battleEvents = [];
        return length;
    };
    BattleLog.prototype.dumpLog = function () {
        console.log(this.battleEvents);
    };
    return BattleLog;
}());
exports.BattleLog = BattleLog;
//# sourceMappingURL=battlelog.js.map