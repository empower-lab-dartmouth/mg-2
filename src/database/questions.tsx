type Question = {
    question: string,
    yes: Question | null,
    no: Question | null,
}

// Fruits

const aStrawberry: Question = {
    question: "Strawberry!",
    yes: null,
    no: null
}

const aDragonfruit: Question = {
    question: "Dragonfruit!",
    yes: null,
    no: null
}

const aBanana: Question = {
    question: "Banana!",
    yes: null,
    no: null
}

const qBerry: Question = {
    question: "Is it a berry?",
    yes: aStrawberry,
    no: aDragonfruit
}

const qRed: Question = {
    question: "Is it red?",
    yes: qBerry,
    no: aBanana
}

// Disney

const aElsa: Question = {
    question: "Elsa!",
    yes: null,
    no: null
}

const aOlaf: Question = {
    question: "Olaf!",
    yes: null,
    no: null
}

const qHuman: Question = {
    question: "Is your character human?",
    yes: aElsa,
    no: aOlaf
}

// Landmark

const aStatue: Question = {
    question: "Statue of Liberty!",
    yes: null,
    no: null
}

const aPyramids: Question = {
    question: "Pyramids of Egypt!",
    yes: null,
    no: null
}

const qGreen: Question = {
    question: "Is it green?",
    yes: aStatue,
    no: aPyramids
}