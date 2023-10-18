
interface AnimalStats {
    name: string;
    age: number;
}

interface Dog extends AnimalStats {
    breed: "Corgi" | "Weinerdog" | "Pitbull";
}

interface Cat extends AnimalStats {
    breed: "Tom" | "Siamese" | "Taby";
}

const lodgiDog: Dog = {
    name: 'Lodgi',
    age: 11,
    breed: "Corgi",
} as const;

const tabyCat: Cat = {
    name: 'Taby',
    age: 5,
    breed: "Taby",
} as const;