export function ChanceToHit(attackRoll: number, defenceRoll: number): number {
    if (attackRoll > defenceRoll) {
        return 1 - (defenceRoll + 2) / (2 * (attackRoll + 1));
    }
    else {
        return attackRoll / (2 * defenceRoll + 1);
    }
}

export function DefLevelAfterDwhHit(currentDef: number): number {
    return Math.ceil(currentDef * 0.7);
}

export function DefLevelAfterBgsHit(currentDef: number, bgsAmount: number): number {
    return Math.max(0, currentDef - bgsAmount);
}

export function CalculateNpcDefRoll(defLevel: number, styleBonus: number): number {
    return (defLevel + 9) * (styleBonus + 64);
}

export function CalculatePlayerAttackRoll(effectiveAttackLevel: number, styleBonus: number): number {
    return (effectiveAttackLevel + 8) * (styleBonus + 64);
}

export function CalculateHammerMaxSpecHit(effectiveStrengthLevel: number, gearStrBonus: number): number {
    return Math.floor(CalculateMaxHit(effectiveStrengthLevel, gearStrBonus) * 1.25);
}

export function CalculateBgsMaxHit(effectiveStrengthLevel: number, gearStrBonus: number): number {
    return Math.floor(CalculateMaxHit(effectiveStrengthLevel, gearStrBonus) * 1.21);
}

export function CalculateMaxHit(effectiveStrengthLevel: number, gearStrBonus: number): number {
    return Math.floor(((effectiveStrengthLevel + 9) * (gearStrBonus + 64) + 320) / 640);
}

export function CalculateLanceMaxHitOnDragon(effectiveStrengthLevel: number, gearStrBonus: number): number {
    return Math.floor(1.2 * CalculateMaxHit(effectiveStrengthLevel, gearStrBonus));
}

export enum AttackStyle {
    STAB,
    SLASH,
    CRUSH,
    RANGE,
    MAGIC,
}