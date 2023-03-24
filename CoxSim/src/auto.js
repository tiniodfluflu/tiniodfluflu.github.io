"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoAutoAttack = void 0;
var adUtil_1 = require("./adUtil");
var rolls_1 = require("./rolls");
function DoAutoAttack(battleLog, attacker, defender, tick) {
    var attackRoll = Math.random() * (0, adUtil_1.CalculatePlayerAttackRoll)(attacker.effectiveAttackLevel, attacker.GetPlayerAttackBonus(attacker.attackStyle));
    var defenceRoll = Math.random() * (0, adUtil_1.CalculateNpcDefRoll)(defender.defenceLevel, defender.GetDefenderStyleBonus(attacker.attackStyle));
    var damageRoll = (0, rolls_1.rollForDamage)((0, adUtil_1.CalculateMaxHit)(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));
    if (attackRoll > defenceRoll && damageRoll > 1) {
        defender.hp = defender.hp - damageRoll;
        battleLog.logEvent("".concat(attacker.name, " hit auto for ").concat(damageRoll, ", ").concat(defender.name, " hp remaining: ").concat(defender.hp, ", tick:").concat(tick, ", attackRoll:").concat(attackRoll, ", defRoll:").concat(defenceRoll));
    }
    else {
        battleLog.logEvent("".concat(attacker.name, " missed auto, ").concat(defender.name, " hp remaining: ").concat(defender.hp, ", tick:").concat(tick, ", attackRoll:").concat(attackRoll, ", defRoll:").concat(defenceRoll));
    }
}
exports.DoAutoAttack = DoAutoAttack;
//# sourceMappingURL=auto.js.map