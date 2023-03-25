import { DoBgsSpec, DoDwhSpec } from "./specs"
import { GamerStrategy } from "./types"
import * as Bonuses from "./commonPlayerBonuses"
import { DoAutoAttack, DoLanceAutoOnDragon } from "./auto"

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

export const gamer_2specs_medreq_medstats_dwh_lance:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.midlevel_med_gear_dwh,
    autoAttack: DoLanceAutoOnDragon,
    autoAttackBonuses: Bonuses.midlevel_med_gear_lance
}

export const gamer_1spec_medreq_medstats_dwh_lance:GamerStrategy = {
    numberOfSpecsAvailable: 1,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.midlevel_med_gear_dwh,
    autoAttack: DoLanceAutoOnDragon,
    autoAttackBonuses: Bonuses.midlevel_med_gear_lance
}

export const gamer_medreq_medstats_dwh_lance_lb:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoDwhSpec,
    specialAttackBonuses: Bonuses.midlevel_med_gear_dwh_lb,
    autoAttack: DoLanceAutoOnDragon,
    autoAttackBonuses: Bonuses.midlevel_med_gear_lance_lb
}

export const gamer_2specs_medreq_medstats_bgs_lance:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.midlevel_med_gear_bgs,
    autoAttack: DoLanceAutoOnDragon,
    autoAttackBonuses: Bonuses.midlevel_med_gear_lance
}

export const gamer_1spec_medreq_medstats_bgs_lance:GamerStrategy = {
    numberOfSpecsAvailable: 1,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.midlevel_med_gear_bgs,
    autoAttack: DoLanceAutoOnDragon,
    autoAttackBonuses: Bonuses.midlevel_med_gear_lance
}

export const gamer_medreq_medstats_bgs_lance_lb:GamerStrategy = {
    numberOfSpecsAvailable: 2,
    specialAttack: DoBgsSpec,
    specialAttackBonuses: Bonuses.midlevel_med_gear_bgs_lb,
    autoAttack: DoLanceAutoOnDragon,
    autoAttackBonuses: Bonuses.midlevel_med_gear_lance_lb
}

