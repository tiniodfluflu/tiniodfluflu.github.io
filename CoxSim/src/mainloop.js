"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var battlelog_1 = require("./battlelog");
var beastiary_1 = require("./beastiary");
var Gamers = require("./gamers");
var specs_1 = require("./specs");
var battleLog = new battlelog_1.BattleLog(true);
var stratLog = [];
for (var iter = 0; iter < 100; iter++) {
    var tickCounter = 0;
    var theOlm = (0, beastiary_1.CreateTrioOlmMeleeHand)();
    // throw specs
    for (var i = 0; i < 3; i++) {
        (0, specs_1.DoDwhSpec)(battleLog, Gamers.minreq_hammer, theOlm, tickCounter);
    }
    tickCounter += 6;
    // do one cycle of non same whatevers if non-lb strats
    (0, specs_1.DoDwhSpec)(battleLog, Gamers.minreq_hammer, theOlm, tickCounter);
    // whippers lose 2 ticks easy because im lazy and dont want to refactor
    (0, auto_1.DoAutoAttack)(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
    (0, auto_1.DoAutoAttack)(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
    tickCounter += 6;
    while (theOlm.hp >= 0 && tickCounter < 1000) {
        (0, auto_1.DoAutoAttack)(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
        (0, auto_1.DoAutoAttack)(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
        (0, auto_1.DoAutoAttack)(battleLog, Gamers.minreq_tent, theOlm, tickCounter);
        tickCounter += 4;
    }
    stratLog.push(tickCounter);
}
//# sourceMappingURL=mainloop.js.map