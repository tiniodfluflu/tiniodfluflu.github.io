"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoBgsSpec = exports.DoDwhSpec = void 0;
var adUtil = require("./adUtil");
var rolls = require("./rolls");
function DoDwhSpec(battleLog, attacker, target, tick) {
    var specRoll = Math.random() * adUtil.CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.totalCrushBonus);
    var defRoll = Math.random() * adUtil.CalculateNpcDefRoll(target.defenceLevel, target.crushBonus);
    var damageRoll = rolls.rollForDamage(adUtil.CalculateHammerMaxSpecHit(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));
    if (specRoll > defRoll && damageRoll >= 1) {
        target.defenceLevel = adUtil.DefLevelAfterDwhHit(target.defenceLevel);
        target.hp = target.hp - damageRoll;
        battleLog.logEvent("".concat(attacker.name, " hit dwh spec for ").concat(damageRoll, ", ").concat(target.name, " def remaining: ").concat(target.defenceLevel, ", tick:").concat(tick, ", attackRoll:").concat(specRoll, ", defRoll:").concat(defRoll));
    }
    else {
        battleLog.logEvent("".concat(attacker.name, " missed dwh spec , ").concat(target.name, " def remaining: ").concat(target.defenceLevel, ", tick:").concat(tick, ", attackRoll:").concat(specRoll, ", defRoll:").concat(defRoll));
    }
}
exports.DoDwhSpec = DoDwhSpec;
function DoBgsSpec(battleLog, attacker, target, tick) {
    var specRoll = Math.random() * adUtil.CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.totalSlashBonus) * 2;
    var defRoll = Math.random() * adUtil.CalculateNpcDefRoll(target.defenceLevel, target.slashBonus);
    var damageRoll = rolls.rollForDamage(adUtil.CalculateBgsMaxHit(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));
    if (specRoll > defRoll && damageRoll >= 1) {
        target.defenceLevel = adUtil.DefLevelAfterBgsHit(target.defenceLevel, damageRoll);
        target.hp = target.hp - damageRoll;
        battleLog.logEvent("".concat(attacker.name, " hit bgs spec for ").concat(damageRoll, ", ").concat(target.name, " def remaining: ").concat(target.defenceLevel, ", tick:").concat(tick, ", attackRoll:").concat(specRoll, ", defRoll:").concat(defRoll));
    }
    else {
        battleLog.logEvent("".concat(attacker.name, " missed bgs spec , ").concat(target.name, " def remaining: ").concat(target.defenceLevel, ", tick:").concat(tick, ", attackRoll:").concat(specRoll, ", defRoll:").concat(defRoll));
    }
}
exports.DoBgsSpec = DoBgsSpec;
//# sourceMappingURL=specs.js.map