interface Hero {
    name: string,
    hp: number,
    strength: number,
    talk: (vocab: string) => string
}

const hero: Hero = {
    hp: 50
}

type PartialHero = Partial<Hero>;

const partialHero: PartialHero = {
    hp: 50
};

/**
 * Partial under the hood
 * type Partial<T> = {P in keyof T?: T[P]}
 */


interface Villain {
    name?: string,
    hobbies?: Array<any>,
    strength?: number,
}

const villain: Villain = {
    name: "steve"
}

type RequiredVillain = Required<Villain>;

const requiredVillain: RequiredVillain = {
    name: "steve",
    hobbies: ["coding"],
    strength: 9001
};

interface Task {
    title: string,
    completed: boolean,
}

let ObjForReadingOnly: Readonly<Task> = {
    title: "Change me if you can!",
    completed: false
}

ObjForReadingOnly.title = " I'm trying!!!";

const hasRonTouchedGrass: (boolean | null) = false;

const ronMustGoOutside:  NonNullable<typeof hasRonTouchedGrass> = true;