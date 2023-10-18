/**
 * typeof: returns a string indicating the type of the unevaluated operand.
 * instanceof: returns a boolean value after checking the constructor prototype exists.
 * in: returns true if a property is available on the prototype chain.
 */


interface Human {
    name: string,
    age: number
}
interface Animal {
    name: string,
    age: number,
    breed: string
}

const charlie: Human = {
    name: "Charlie",
    age: 30,
}
const rebecca: Animal = {
    name: "Rebecca",
    age: 3,
    breed: "lion"
}

type HumanOrAnimal = Human | Animal;

const speakForHumanOrAnimal = (character: HumanOrAnimal): string => {
    if ("breed" in character) {
        return "Roar!"
    }

    return "Hello World!"
}