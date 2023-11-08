export const oneThreeOne = {
    name: '1-3-1 Split',
    description: 'Require strong jungler and midlaner. Focus on getting Baron. Suffers at 5v5 teamfight.',
    pickBonus: 5,
    teamfightBonus: -10,
    splitBonus: 5,
    pokeBonus: 5,
    dragonBonus: 0,
    baronBonus: 5,
    topBonus: 0,
    jgBonus: 10,
    midBonus: 10,
    adcBonus: -5,
    supBonus: 0
}

export const scalingTeamfight = {
    name: 'Scaling Teamfight',
    description: 'Require a strong adc and farming. Strong late game and excel at 5v5 teamfight.',
    pickBonus: 0,
    teamfightBonus: 10,
    splitBonus: -5,
    pokeBonus: 0,
    dragonBonus: 5,
    baronBonus: 0,
    topBonus: 0,
    jgBonus: 0,
    midBonus: 0,
    adcBonus: 10,
    supBonus: 5
}

export const fourOne = {
    name: '4-1 Split',
    description: 'Require a strong toplaner. Good for getting objectives.',
    pickBonus: 0,
    teamfightBonus: -5,
    splitBonus: 10,
    pokeBonus: 0,
    dragonBonus: 5,
    baronBonus: 5,
    topBonus: 10,
    jgBonus: 0,
    midBonus: 5,
    adcBonus: 0,
    supBonus: 0
}

export const earlySkirm = {
    name: 'Early Skirmishes',
    description: 'Require strong laning and jungler. Toplaner would rotate more often thus less split pressure. Good for stacking dragons.',
    pickBonus: 10,
    teamfightBonus: 0,
    splitBonus: 0,
    pokeBonus: -5,
    dragonBonus: 10,
    baronBonus: 0,
    topBonus: -5,
    jgBonus: 10,
    midBonus: 5,
    adcBonus: 0,
    supBonus: 5
}

export const blgStrat = {
    teamStrat: scalingTeamfight,
    resourcePts: 30,
    topResource: 9,
    jgResource: 5,
    midResource: 6,
    adcResource: 10,
    supResource: 1
}

export const t1Strat = {
    teamStrat: earlySkirm,
    resourcePts: 30,
    topResource: 7,
    jgResource: 5,
    midResource: 7,
    adcResource: 7,
    supResource: 4
}