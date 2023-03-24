"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrioOlmMeleeHand = exports.CreateTektonEnraged = exports.CreateTekton = void 0;
var types_1 = require("./types");
function CreateTekton() {
    return new types_1.Monster("Tekton", 205, 155, 165, 105, 300);
}
exports.CreateTekton = CreateTekton;
function CreateTektonEnraged() {
    return new types_1.Monster("Tekton (Enraged)", 205, 200, 290, 100, 300);
}
exports.CreateTektonEnraged = CreateTektonEnraged;
function CreateTrioOlmMeleeHand() {
    return new types_1.Monster("Olm (MeleeHand) [trio]", 175, 50, 50, 50, 1200);
}
exports.CreateTrioOlmMeleeHand = CreateTrioOlmMeleeHand;
//# sourceMappingURL=beastiary.js.map