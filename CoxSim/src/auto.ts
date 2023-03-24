import { AttackStyle, CalculateMaxHit, CalculateNpcDefRoll, CalculatePlayerAttackRoll } from "./adUtil";
import { BattleLog } from "./battlelog";
import { rollForDamage as RollForDamage } from "./rolls";
import { Monster, PlayerBonuses } from "./types";

export function DoAutoAttack(battleLog:BattleLog, attacker:PlayerBonuses, defender:Monster, tick:number):void {
    let attackRoll = Math.random() * CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.GetPlayerAttackBonus(attacker.attackStyle));
    let defenceRoll = Math.random() * CalculateNpcDefRoll(defender.defenceLevel, defender.GetDefenderStyleBonus(attacker.attackStyle));
    let damageRoll = RollForDamage(CalculateMaxHit(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));

    if (attackRoll > defenceRoll && damageRoll > 1) {
        defender.hp = defender.hp - damageRoll;
        battleLog.logEvent(
            `${attacker.name} hit auto for ${damageRoll}, ${defender.name} hp remaining: ${defender.hp}, tick:${tick}, attackRoll:${attackRoll}, defRoll:${defenceRoll}`);
    }
    else {
        battleLog.logEvent(
            `${attacker.name} missed auto, ${defender.name} hp remaining: ${defender.hp}, tick:${tick}, attackRoll:${attackRoll}, defRoll:${defenceRoll}`);
    }
}