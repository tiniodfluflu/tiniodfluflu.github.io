import { AttackStyle } from "./adUtil";
import { PlayerBonuses } from "./types";

export const minreq_tent:PlayerBonuses = {
    name: "min req whipper",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 135,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};

export const minreq_maxstats_tent:PlayerBonuses = {
    name: "min req max stats whipper",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 135,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};

export const minreq_lb_tent:PlayerBonuses = {
    name: "min req lb whipper",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 127,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};

export const minreq_maxstats_lb_tent:PlayerBonuses = {
    name: "min req max stats lb whipper",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 127,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};

export const minreq_bgs:PlayerBonuses = {
    name: "min req bgs",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 175,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

export const minreq_maxstats_bgs:PlayerBonuses = {
    name: "min req max stats bgs",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 175,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

export const minreq_lb_bgs:PlayerBonuses = {
    name: "min req lb bgs",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 167,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

export const minreq_maxstats_lb_bgs:PlayerBonuses = {
    name: "min req max stats lb bgs",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 167,
    attackStyle:AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

export const minreq_dwh:PlayerBonuses = {
    name: "min req dwh",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 0,
    totalCrushBonus: 141,
    totalStrengthBonus: 134,
    attackStyle:AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

export const minreq_maxstats_dwh:PlayerBonuses = {
    name: "min req max stats dwh",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 141,
    totalStrengthBonus: 134,
    attackStyle:AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

export const minreq_lb_dwh:PlayerBonuses = {
    name: "min req lb dwh",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 0,
    totalCrushBonus: 141,
    totalStrengthBonus: 126,
    attackStyle:AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

export const minreq_maxstats_lb_dwh:PlayerBonuses = {
    name: "min req max stats lb dwh",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 141,
    totalStrengthBonus: 126,
    attackStyle:AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};

function GetPlayerAttackBonus(style:AttackStyle):AttackStyle {
    
    if(style === AttackStyle.STAB) {
        return this.totalStabBonus;
    }
    if(style === AttackStyle.SLASH) {
        return this.totalSlashBonus;
    }
    if(style === AttackStyle.CRUSH) {
        return this.totalCrushBonus;
    }
    throw new Error("wrong attack style");
}