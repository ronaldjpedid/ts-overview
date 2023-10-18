/** We can use the never keyword to type functions that will throw errors and never return. */
const functionForError = (statusCode: number): never => {
    if(statusCode === 404){
        throw new Error('Error')
    }

    throw new Error('Error')
}

