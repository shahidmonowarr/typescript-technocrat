type NoobDeveloper = {
    name: string,
}

// type juniorDeveloper = {
//     name: string,
//     experience: number,
//     expertise: string
// }

type JuniorDeveloper = NoobDeveloper & {
    experience: number,
    expertise: string
}

enum Level {
    junior = "junior",
    mid = "mid",
    senior = "senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: Level;
}

const NewDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Shahid",
    experience: 2,
    expertise: "React"
}

const developer: NextLevelDeveloper = {
    name: "Shahid Dev",
    experience: 2,
    expertise: "Typescript",
    leadershipExperience: 1,
    level: Level.mid,
}