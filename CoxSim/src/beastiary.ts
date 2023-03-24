import { Monster } from "./types";

export function CreateTekton():Monster {
    return new Monster("Tekton", 205, 155, 165, 105, 300);
}

export function CreateTektonEnraged():Monster{
    return new Monster("Tekton (Enraged)", 205,200,290,100,300);
}

export function CreateTrioOlmMeleeHand():Monster{
    return new Monster("Olm (MeleeHand) [trio]", 175, 50, 50, 50, 1200);
}