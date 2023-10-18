
/**
 * Literal types are as they sound. They assume a literal type of what has been provided.
 */
type STRING_LITERAL = "My String";
type NUMBER_LITERAL = 17;
type BOOLEAN_LITERAL = true;

const myString: STRING_LITERAL = "My String";
const myNumber: NUMBER_LITERAL = 17;
const myBoolean: BOOLEAN_LITERAL = true;

/**Types are more versatile when it comes to defining complex and union types. You can use them to create combinations, intersections, and mapped types. */

type TAnimalStats = {
    name: string;
    age: number;
};

type TDogBreed = "Corgi" | "Weinerdog" | "Pitbull";
type TCatBreed = "Tom" | "Siamese" | "Taby";

type TDog = {
    breed: TDogBreed
}

type TCat = {
    breed: TCatBreed
}

/**Intersection Type: Uses & operator */
type TDoggie = TAnimalStats & TDog;
type TKitty = TAnimalStats & TCat;

/**Union Type: Uses | Operator */
type TAnimal = TDog | TKitty;

/** Mapped Types: Pick and Omit */


const lodgiDogType: TDoggie = {
    name: 'Lodgi',
    age: 11,
    breed: "Corgi",
};

const tabyCatType: TKitty = {
    name: 'Taby',
    age: 5,
    breed: "Taby",
};

type TDogBreedOnly = Pick<TDog, "breed">;

const WinningDogBreedType: TDogBreedOnly = {
    breed: "Corgi"
};

//new type with breed only after omitting name and age.
type TCatBreedOnly = Omit<TKitty, "name" | "age"> | {
    breed?: string;
};

const WinningCatBreed: TCatBreedOnly = {
    breed: "Taby"
};

type unknownValue = unknown;
type anyValue = any;