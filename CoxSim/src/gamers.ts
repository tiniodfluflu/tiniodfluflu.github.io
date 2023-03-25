import { DoBgsSpec, DoDwhSpec } from "./specs"
import { GamerStrategy } from "./types"
import * as Bonuses from "./commonPlayerBonuses"
import { DoAutoAttack } from "./auto"

export const gamer_2spec_minreq_dwh_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.minreq_dwh,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_tent
}

export const gamer_1spec_minreq_dwh_tent:GamerStrategy = {
    numberOfSpecsAvailable: 1,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.minreq_dwh,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_tent
}

export const gamer_2spec_minreq_bgs_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.minreq_bgs,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_tent
}

export const gamer_1spec_minreq_bgs_tent:GamerStrategy = {
    numberOfSpecsAvailable: 1,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.minreq_bgs,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_tent
}

export const gamer_minreq_dwh_lb_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.minreq_lb_dwh,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_lb_tent
}

export const gamer_minreq_bgs_lb_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.minreq_lb_bgs,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_lb_tent
}

export const gamer_2spec_minreq_maxstats_dwh_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.minreq_maxstats_dwh,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_maxstats_tent
}

export const gamer_1spec_minreq_maxstats_dwh_tent:GamerStrategy = {
    numberOfSpecsAvailable: 1,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.minreq_maxstats_dwh,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_maxstats_tent
}

export const gamer_2spec_minreq_maxstats_bgs_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.minreq_maxstats_bgs,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_maxstats_tent
}

export const gamer_1spec_minreq_maxstats_bgs_tent:GamerStrategy = {
    numberOfSpecsAvailable: 1,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.minreq_maxstats_bgs,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_maxstats_tent
}

export const gamer_minreq_maxstats_dwh_lb_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.minreq_maxstats_lb_dwh,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_maxstats_lb_tent
}

export const gamer_minreq_maxstats_bgs_lb_tent:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.minreq_maxstats_lb_bgs,
    autoAttack: DoAutoAttack,
    autoAttackBonuses: Bonuses.minreq_maxstats_lb_tent
}
