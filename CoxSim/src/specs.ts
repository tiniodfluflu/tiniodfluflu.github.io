import * as adUtil from "./adUtil";
import * as rolls from "./rolls"
import { Monster, PlayerBonuses } from "./types";
import { BattleLog } from "./battlelog";

export function DoDwhSpec(battleLog: BattleLog, attacker: PlayerBonuses, target: Monster, tick: number): void {
    let specRoll: number = Math.floor(Math.random() * adUtil.CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.totalCrushBonus));
    let defRoll: number = Math.floor(Math.random() * adUtil.CalculateNpcDefRoll(target.defenceLevel, target.crushBonus));
    let damageRoll: number = rolls.rollForDamage(
        adUtil.CalculateHammerMaxSpecHit(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));
    if (specRoll > defRoll && damageRoll >= 1) {
        target.defenceLevel = adUtil.DefLevelAfterDwhHit(target.defenceLevel);
        target.hp = target.hp - damageRoll;
        battleLog.logEvent(
            `${attacker.name} hit dwh spec for ${damageRoll}, ${target.name} def remaining: ${target.defenceLevel}, tick:${tick}, attackRoll:${specRoll}, defRoll:${defRoll}`);
    }
    else {
        battleLog.logEvent(
            `${attacker.name} missed dwh spec , ${target.name} def remaining: ${target.defenceLevel}, tick:${tick}, attackRoll:${specRoll}, defRoll:${defRoll}`);
    }
    battleLog.setOlmDef(target.defenceLevel);
}

export function DoBgsSpec(battleLog: BattleLog, attacker: PlayerBonuses, target: Monster, tick: number): void {
    let specRoll: number = Math.floor(Math.random() * adUtil.CalculatePlayerAttackRoll(attacker.effectiveAttackLevel, attacker.totalSlashBonus) * 2);
    let defRoll: number = Math.floor(Math.random() * adUtil.CalculateNpcDefRoll(target.defenceLevel, target.slashBonus));
    let damageRoll: number = rolls.rollForDamage(
        adUtil.CalculateBgsMaxHit(attacker.effectiveStrengthLevel, attacker.totalStrengthBonus));
    if (specRoll > defRoll && damageRoll >= 1) {
        target.defenceLevel = adUtil.DefLevelAfterBgsHit(target.defenceLevel, damageRoll);
        target.hp = target.hp - damageRoll;
        battleLog.logEvent(
            `${attacker.name} hit bgs spec for ${damageRoll}, ${target.name} def remaining: ${target.defenceLevel}, tick:${tick}, attackRoll:${specRoll}, defRoll:${defRoll}`);
    }
    else {
        battleLog.logEvent(
            `${attacker.name} missed bgs spec , ${target.name} def remaining: ${target.defenceLevel}, tick:${tick}, attackRoll:${specRoll}, defRoll:${defRoll}`);

    }
    battleLog.setOlmDef(target.defenceLevel);
}

