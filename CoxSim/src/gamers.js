"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minreqmaxstats_lb_dwh = exports.minreq_lb_dwh = exports.minreqmaxstats_dwh = exports.minreq_hammer = exports.minreqmaxstats_lb_bgs = exports.minreq_lb_bgs = exports.minreqmaxstats_bgs = exports.minreq_bgs = exports.minreqmaxstats_lb_tent = exports.minreq_lb_tent = exports.minreqmaxstats_tent = exports.minreq_tent = void 0;
var adUtil_1 = require("./adUtil");
exports.minreq_tent = {
    name: "min req whipper",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 135,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};
exports.minreqmaxstats_tent = {
    name: "min req max stats whipper",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 135,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};
exports.minreq_lb_tent = {
    name: "min req lb whipper",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 127,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};
exports.minreqmaxstats_lb_tent = {
    name: "min req max stats lb whipper",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 0,
    totalStrengthBonus: 127,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 4,
};
exports.minreq_bgs = {
    name: "min req bgs",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 175,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
exports.minreqmaxstats_bgs = {
    name: "min req max stats bgs",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 175,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
exports.minreq_lb_bgs = {
    name: "min req lb bgs",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 167,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
exports.minreqmaxstats_lb_bgs = {
    name: "min req max stats lb bgs",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 155,
    totalCrushBonus: 0,
    totalStrengthBonus: 167,
    attackStyle: adUtil_1.AttackStyle.SLASH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
exports.minreq_hammer = {
    name: "min req dwh",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 0,
    totalCrushBonus: 141,
    totalStrengthBonus: 134,
    attackStyle: adUtil_1.AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
exports.minreqmaxstats_dwh = {
    name: "min req max stats dwh",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 141,
    totalStrengthBonus: 134,
    attackStyle: adUtil_1.AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
exports.minreq_lb_dwh = {
    name: "min req lb dwh",
    effectiveAttackLevel: 111,
    effectiveStrengthLevel: 114,
    totalStabBonus: 0,
    totalSlashBonus: 0,
    totalCrushBonus: 141,
    totalStrengthBonus: 126,
    attackStyle: adUtil_1.AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
exports.minreqmaxstats_lb_dwh = {
    name: "min req max stats lb dwh",
    effectiveAttackLevel: 144,
    effectiveStrengthLevel: 147,
    totalStabBonus: 0,
    totalSlashBonus: 137,
    totalCrushBonus: 141,
    totalStrengthBonus: 126,
    attackStyle: adUtil_1.AttackStyle.CRUSH,
    GetPlayerAttackBonus: GetPlayerAttackBonus,
    attackCooldown: 6,
};
function GetPlayerAttackBonus(style) {
    if (style === adUtil_1.AttackStyle.STAB) {
        return this.totalStabBonus;
    }
    if (style === adUtil_1.AttackStyle.SLASH) {
        return this.totalSlashBonus;
    }
    if (style === adUtil_1.AttackStyle.CRUSH) {
        return this.totalCrushBonus;
    }
    throw new Error("wrong attack style");
}
//# sourceMappingURL=gamers.js.map