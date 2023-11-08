import { bin, xun, yagao, elk, on, zeus, oner, faker, gumayusi, keria } from './players'
import { blgStrat, t1Strat } from './strat.js'

export const blg = {
    name: "BLG",
    players: [bin, xun, yagao, elk, on],
    teamStrat: blgStrat
}

export const t1 = {
    name: "T1",
    players: [zeus, oner, faker, gumayusi, keria],
    teamStrat: t1Strat
}