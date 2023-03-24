import { DoAutoAttack } from "./auto";
import { BattleLog } from "./battlelog";
import { CreateTrioOlmMeleeHand } from "./beastiary";
import * as Gamers from "./commonPlayerBonuses";
import { DoDwhSpec, DoBgsSpec } from "./specs";

let battleLog: BattleLog = new BattleLog(true);
let stratLog: Array<number> = [];

for (let iter = 0; iter < 100; iter++) {
    let tickCounter = 0;

    let theOlm = CreateTrioOlmMeleeHand();

    // throw specs
    for (let i = 0; i < 3; i++) {
        DoDwhSpec(battleLog, Gamers.minreq_dwh, theOlm, tickCounter);
    }
    tickCounter += 6;

    // do one cycle of non same whatevers if non-lb strats
    DoDwhSpec(battleLog, Gamers.minreq_dwh, theOlm, tickCounter);
    // whippers lose 2 ticks easy because im lazy and dont want to refactor
    DoAutoAttack(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
    DoAutoAttack(battleLog, Gamers.minreq_tent, theOlm, tickCounter);

    tickCounter += 6;

    while (theOlm.hp >= 0 && tickCounter < 1000) {
        DoAutoAttack(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
        DoAutoAttack(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
        DoAutoAttack(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
        tickCounter += 4;
    }

    stratLog.push(tickCounter);
}