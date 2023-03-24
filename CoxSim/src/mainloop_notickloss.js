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
    var gamer1spec = Gamers.minreq_hammer;
    var gamer1auto = Gamers.minreq_tent;
    var gamer1cd = 0;
    var gamer2spec = Gamers.minreq_hammer;
    var gamer2auto = Gamers.minreq_tent;
    var gamer2cd = 0;
    var gamer3spec = Gamers.minreq_hammer;
    var gamer3auto = Gamers.minreq_tent;
    var gamer3cd = 0;
    var gamer1specstothrow = 2;
    var gamer2specstothrow = 1;
    var gamer3specstothrow = 1;
    while (theOlm.hp >= 0 && tickCounter < 1000) {
        // process gamer 1
        if (gamer1cd <= 0) {
            if (gamer1specstothrow > 0) {
                gamer1specstothrow -= 1;
                (0, specs_1.DoDwhSpec)(battleLog, gamer1spec, theOlm, tickCounter);
                gamer1cd += gamer1spec.attackCooldown;
            }
            else {
                (0, auto_1.DoAutoAttack)(battleLog, gamer1auto, theOlm, tickCounter);
                gamer1cd += gamer1auto.attackCooldown;
            }
        }
        // process gamer 2
        if (gamer2cd <= 0) {
            if (gamer2specstothrow > 0) {
                gamer2specstothrow -= 1;
                (0, specs_1.DoDwhSpec)(battleLog, gamer2spec, theOlm, tickCounter);
                gamer2cd += gamer2spec.attackCooldown;
            }
            else {
                (0, auto_1.DoAutoAttack)(battleLog, gamer2auto, theOlm, tickCounter);
                gamer2cd += gamer2auto.attackCooldown;
            }
        }
        // process gamer 3
        if (gamer3cd <= 0) {
            if (gamer3specstothrow > 0) {
                gamer3specstothrow -= 1;
                (0, specs_1.DoDwhSpec)(battleLog, gamer3spec, theOlm, tickCounter);
                gamer3cd += gamer3spec.attackCooldown;
            }
            else {
                (0, auto_1.DoAutoAttack)(battleLog, gamer3auto, theOlm, tickCounter);
                gamer3cd += gamer3auto.attackCooldown;
            }
        }
        tickCounter += 1;
    }
    stratLog.push(tickCounter);
}
//# sourceMappingURL=mainloop_notickloss.js.map