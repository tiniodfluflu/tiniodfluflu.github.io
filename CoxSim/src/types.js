"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var adUtil_1 = require("./adUtil");
var Monster = /** @class */ (function () {
    function Monster(name, defenceLevel, stabBonus, slashBonus, crushBonus, hp) {
        this.name = name;
        this.defenceLevel = defenceLevel;
        this.stabBonus = stabBonus;
        this.slashBonus = slashBonus;
        this.crushBonus = crushBonus;
        this.hp = hp;
    }
    Monster.prototype.GetDefenderStyleBonus = function (style) {
        if (style === adUtil_1.AttackStyle.STAB) {
            return this.stabBonus;
        }
        if (style === adUtil_1.AttackStyle.SLASH) {
            return this.slashBonus;
        }
        if (style === adUtil_1.AttackStyle.CRUSH) {
            return this.crushBonus;
        }
        throw new Error("wrong attack style");
    };
    return Monster;
}());
exports.Monster = Monster;
//# sourceMappingURL=types.js.map