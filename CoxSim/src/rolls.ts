export function rollForDamage(maxHit: number): number {
    return Math.floor(Math.random() * (maxHit + 1));
}