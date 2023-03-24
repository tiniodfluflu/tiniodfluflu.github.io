import { AttackStyle } from "./adUtil";
import { BattleLog } from "./battlelog";

export class Monster {
    name: string;
    defenceLevel: number;
    stabBonus: number;
    slashBonus: number;
    crushBonus: number;
    hp: number

    constructor(name: string, defenceLevel: number, stabBonus: number, slashBonus: number, crushBonus: number, hp: number) {
        this.name = name;
        this.defenceLevel = defenceLevel;
        this.stabBonus = stabBonus;
        this.slashBonus = slashBonus;
        this.crushBonus = crushBonus;
        this.hp = hp;
    }

    GetDefenderStyleBonus(style:AttackStyle):AttackStyle {
        if(style === AttackStyle.STAB) {
            return this.stabBonus;
        }
        if(style === AttackStyle.SLASH) {
            return this.slashBonus;
        }
        if(style === AttackStyle.CRUSH) {
            return this.crushBonus;
        }
        throw new Error("wrong attack style");
    }
}

export interface PlayerBonuses {
    name: string;
    effectiveAttackLevel: number;
    effectiveStrengthLevel: number;
    totalStabBonus: number;
    totalSlashBonus: number;
    totalCrushBonus: number;
    totalStrengthBonus: number;
    attackStyle:AttackStyle;
    attackCooldown:number;

    GetPlayerAttackBonus(style:AttackStyle):AttackStyle;
}

export interface GamerStrategy {
    numberOfSpecsAvailable:number;
    specialAttack:SpecAction;
    specialAttackBonuses:PlayerBonuses;
    autoAttack:AutoAction;
    autoAttackBonuses:PlayerBonuses;
}

export interface SpecAction {
    (battleLog:BattleLog, attacker:PlayerBonuses, defender:Monster, tick:number)
}

export interface AutoAction {
    (battleLog:BattleLog, attacker:PlayerBonuses, defender:Monster, tick:number)
}