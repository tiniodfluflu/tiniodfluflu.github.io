"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackStyle = exports.CalculateMaxHit = exports.CalculateBgsMaxHit = exports.CalculateHammerMaxSpecHit = exports.CalculatePlayerAttackRoll = exports.CalculateNpcDefRoll = exports.DefLevelAfterBgsHit = exports.DefLevelAfterDwhHit = exports.ChanceToHit = void 0;
function ChanceToHit(attackRoll, defenceRoll) {
    if (attackRoll > defenceRoll) {
        return 1 - (defenceRoll + 2) / (2 * (attackRoll + 1));
    }
    else {
        return attackRoll / (2 * defenceRoll + 1);
    }
}
exports.ChanceToHit = ChanceToHit;
function DefLevelAfterDwhHit(currentDef) {
    return Math.ceil(currentDef * 0.7);
}
exports.DefLevelAfterDwhHit = DefLevelAfterDwhHit;
function DefLevelAfterBgsHit(currentDef, bgsAmount) {
    return Math.max(0, currentDef - bgsAmount);
}
exports.DefLevelAfterBgsHit = DefLevelAfterBgsHit;
function CalculateNpcDefRoll(defLevel, styleBonus) {
    return (defLevel + 9) * (styleBonus + 64);
}
exports.CalculateNpcDefRoll = CalculateNpcDefRoll;
function CalculatePlayerAttackRoll(effectiveAttackLevel, styleBonus) {
    return effectiveAttackLevel * (styleBonus + 64);
}
exports.CalculatePlayerAttackRoll = CalculatePlayerAttackRoll;
function CalculateHammerMaxSpecHit(effectiveStrengthLevel, gearStrBonus) {
    return Math.floor(CalculateMaxHit(effectiveStrengthLevel, gearStrBonus) * 1.25);
}
exports.CalculateHammerMaxSpecHit = CalculateHammerMaxSpecHit;
function CalculateBgsMaxHit(effectiveStrengthLevel, gearStrBonus) {
    return Math.floor(CalculateMaxHit(effectiveStrengthLevel, gearStrBonus) * 1.21);
}
exports.CalculateBgsMaxHit = CalculateBgsMaxHit;
function CalculateMaxHit(effectiveStrengthLevel, gearStrBonus) {
    return Math.floor((effectiveStrengthLevel * (gearStrBonus + 64) + 320) / 640);
}
exports.CalculateMaxHit = CalculateMaxHit;
var AttackStyle;
(function (AttackStyle) {
    AttackStyle[AttackStyle["STAB"] = 0] = "STAB";
    AttackStyle[AttackStyle["SLASH"] = 1] = "SLASH";
    AttackStyle[AttackStyle["CRUSH"] = 2] = "CRUSH";
    AttackStyle[AttackStyle["RANGE"] = 3] = "RANGE";
    AttackStyle[AttackStyle["MAGIC"] = 4] = "MAGIC";
})(AttackStyle = exports.AttackStyle || (exports.AttackStyle = {}));
//# sourceMappingURL=adUtil.js.map