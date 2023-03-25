import { CalculateLanceMaxHitOnDragon, CalculateMaxHit, CalculateNpcDefRoll, CalculatePlayerAttackRoll } from "./adUtil";
import { BattleLog } from "./battlelog";
import { rollForDamage as RollForDamage } from "./rolls";
import { Monster, PlayerBonuses } from "./types";

export function DoAutoAttack(battleLog:BattleLog, attacker:PlayerBonuses, defender:Monster, tick:number):void {
    let attackRoll = Math.floor(Math.random() * CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.GetPlayerAttackBonus(attacker.attackStyle)));
    let defenceRoll = Math.floor(Math.random() * CalculateNpcDefRoll(defender.defenceLevel, defender.GetDefenderStyleBonus(attacker.attackStyle)));
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

export function DoLanceAutoOnDragon(battleLog:BattleLog, attacker:PlayerBonuses, defender:Monster, tick:number) {
    let attackRoll = Math.floor(1.2 * Math.random() * CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.GetPlayerAttackBonus(attacker.attackStyle)));
    let defenceRoll = Math.floor(Math.random() * CalculateNpcDefRoll(defender.defenceLevel, defender.GetDefenderStyleBonus(attacker.attackStyle)));
    let damageRoll = RollForDamage(CalculateLanceMaxHitOnDragon(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));

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

export function DoScytheAuto(battleLog:BattleLog, attacker:PlayerBonuses, defender:Monster, tick:number) {
    let scyMult = 1;
    for(let i=0; i<3; i++)
    {
        let attackRoll = Math.floor(Math.random() * CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.GetPlayerAttackBonus(attacker.attackStyle)));
        let defenceRoll =Math.floor( Math.random() * CalculateNpcDefRoll(defender.defenceLevel, defender.GetDefenderStyleBonus(attacker.attackStyle)));
        let damageRoll = RollForDamage(CalculateMaxHit(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));
        damageRoll = Math.floor(damageRoll * scyMult);

        if (attackRoll > defenceRoll && damageRoll > 1) {
            defender.hp = defender.hp - damageRoll;
            battleLog.logEvent(
                `${attacker.name} hit scy auto ${i+1} of 3 for ${damageRoll}, ${defender.name} hp remaining: ${defender.hp}, tick:${tick}, attackRoll:${attackRoll}, defRoll:${defenceRoll}`);
        }
        else {
            battleLog.logEvent(
                `${attacker.name} missed scy auto ${i+1} of 3, ${defender.name} hp remaining: ${defender.hp}, tick:${tick}, attackRoll:${attackRoll}, defRoll:${defenceRoll}`);
        }
        scyMult = scyMult / 2;
    }
}