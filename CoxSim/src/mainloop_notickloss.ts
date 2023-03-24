import { DoAutoAttack } from "./auto";
import { BattleLog } from "./battlelog";
import { CreateTrioOlmMeleeHand } from "./beastiary";
import * as Bonuses from "./commonPlayerBonuses";
import { DoDwhSpec, DoBgsSpec } from "./specs";
import { GamerStrategy } from "./types";

let battleLog: BattleLog = new BattleLog(true);
let stratLog: Array<number> = [];

const MAX_TICKCOUNT:number = 1000;

export function TrioOlmTicks(maxIter: number): Array<number> {
    for (let iter = 0; iter < maxIter; iter++) {
        let tickCounter = 0;

        let theOlm = CreateTrioOlmMeleeHand();

        let gamer1spec = Bonuses.minreq_dwh;
        let gamer1auto = Bonuses.minreq_tent;
        let gamer1cd = 0;

        let gamer2spec = Bonuses.minreq_dwh;
        let gamer2auto = Bonuses.minreq_tent;
        let gamer2cd = 0;

        let gamer3spec = Bonuses.minreq_dwh;
        let gamer3auto = Bonuses.minreq_tent;
        let gamer3cd = 0;

        let gamer1specstothrow = 2;
        let gamer2specstothrow = 1;
        let gamer3specstothrow = 1;


        while (theOlm.hp >= 0 && tickCounter < this.MAX_TICKCOUNT) {
            // process gamer 1
            if (gamer1cd <= 0) {
                if (gamer1specstothrow > 0) {
                    gamer1specstothrow -= 1;
                    DoDwhSpec(battleLog, gamer1spec, theOlm, tickCounter);
                    gamer1cd += gamer1spec.attackCooldown;
                } else {
                    DoAutoAttack(battleLog, gamer1auto, theOlm, tickCounter);
                    gamer1cd += gamer1auto.attackCooldown;
                }
            }


            // process gamer 2
            if (gamer2cd <= 0) {
                if (gamer2specstothrow > 0) {
                    gamer2specstothrow -= 1;
                    DoDwhSpec(battleLog, gamer2spec, theOlm, tickCounter);
                    gamer2cd += gamer2spec.attackCooldown;
                } else {
                    DoAutoAttack(battleLog, gamer2auto, theOlm, tickCounter);
                    gamer2cd += gamer2auto.attackCooldown;
                }
            }


            // process gamer 3
            if (gamer3cd <= 0) {
                if (gamer3specstothrow > 0) {
                    gamer3specstothrow -= 1;
                    DoDwhSpec(battleLog, gamer3spec, theOlm, tickCounter);
                    gamer3cd += gamer3spec.attackCooldown;
                } else {
                    DoAutoAttack(battleLog, gamer3auto, theOlm, tickCounter);
                    gamer3cd += gamer3auto.attackCooldown;
                }
            }

            tickCounter += 1;
        }

        stratLog.push(tickCounter);
    }
    return stratLog;
}

/**
 * Kills trio mob with gamers 1/2/3 in pid order
 * @param maxIter iterations for simulation, high = more compute time / less variance
 * @param gamer1 gamer 1 by pid
 * @param gamer2 gamer 2 by pid
 * @param gamer3 gamer 3 by pid
 * @returns array of ticks taken for each fight, of length maxIter
 */
export function DoTrioOlmWithSpecStrategy(maxIter:number, gamer1:GamerStrategy, gamer2:GamerStrategy, gamer3: GamerStrategy):Array<number> {
    for (let iter = 0; iter < maxIter; iter++) {
        let tickCounter = 0;

        let gamer1NextAttackTick:number = 0;
        let gamer2NextAttackTick:number = 0;
        let gamer3NextAttackTick:number = 0;

        let gamer1SpecsRemaining:number = gamer1.numberOfSpecsAvailable;
        let gamer2SpecsRemaining:number = gamer2.numberOfSpecsAvailable;
        let gamer3SpecsRemaining:number = gamer3.numberOfSpecsAvailable;

        let theOlm = CreateTrioOlmMeleeHand();

        while (theOlm.hp >= 0 && tickCounter < this.MAX_TICKCOUNT) {
            // process gamer 1
            if (gamer1NextAttackTick >= tickCounter) {
                if (gamer1SpecsRemaining > 0) {
                    gamer1SpecsRemaining -= 1;
                    gamer1.specialAttack(battleLog, gamer1.specialAttackBonuses, theOlm, tickCounter);
                    gamer1NextAttackTick += gamer1.specialAttackBonuses.attackCooldown;
                } else {
                    gamer1.autoAttack(battleLog, gamer1.autoAttackBonuses, theOlm, tickCounter);
                    gamer1NextAttackTick += gamer1.autoAttackBonuses.attackCooldown;
                }
            }

            // process gamer 2
            if (gamer2NextAttackTick >= tickCounter) {
                if (gamer2SpecsRemaining > 0) {
                    gamer2SpecsRemaining -= 1;
                    gamer2.specialAttack(battleLog, gamer2.specialAttackBonuses, theOlm, tickCounter);
                    gamer2NextAttackTick += gamer2.specialAttackBonuses.attackCooldown;
                } else {
                    gamer2.specialAttack(battleLog, gamer2.autoAttackBonuses, theOlm, tickCounter);
                    gamer2NextAttackTick += gamer2.autoAttackBonuses.attackCooldown;
                }
            }

            // process gamer 3
            if (gamer3NextAttackTick >= tickCounter) {
                if (gamer3SpecsRemaining > 0) {
                    gamer3SpecsRemaining -= 1;
                    gamer3.specialAttack(battleLog, gamer3.specialAttackBonuses, theOlm, tickCounter);
                    gamer3NextAttackTick += gamer3.specialAttackBonuses.attackCooldown;
                } else {
                    gamer3.autoAttack(battleLog, gamer3.autoAttackBonuses, theOlm, tickCounter);
                    gamer3NextAttackTick += gamer3.autoAttackBonuses.attackCooldown;
                }
            }

            tickCounter += 1;
        }

        stratLog.push(tickCounter);
    }
    return stratLog;
}