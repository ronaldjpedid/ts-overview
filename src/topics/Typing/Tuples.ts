/**
 * A tuple is an array of data types.
 * 
 * Tuples are particularly useful when working with functions that return multiple values, such as a function returning both a name and an age. Tuples provide a way to maintain the expected order and types of the values returned by the function.
 */

let toys: [string, number, boolean];
toys = ["Teddy", 6, true];

const teddy: string = toys[0];
const amount: number = toys[1];
const inInventory: boolean = toys[2];