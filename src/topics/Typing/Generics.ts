type MyGenericType<T> = {
    data: T
}

interface MyGenericInterface<T> {
    data: T
}


const myDataType: MyGenericType<string> = { data: "Hi" }
console.log('myDataType: ', myDataType);
const myDataInterface: MyGenericInterface<5> = { data: 5 }
console.log('myDataInterface: ', myDataInterface);

/** This helper type can be used to get types from nested objects */
export const getDeepValue = <
    /**Type Arguments */
    Obj, FirstKey extends keyof Obj,
    SecondKey extends keyof Obj[FirstKey]>

    (obj: Obj, firstKey: FirstKey, secondKey: SecondKey):
    /** Function Args ^ */

    /** Return Type v */
    Obj[FirstKey][SecondKey] => {
    return {} as any;
}

const obj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: "Hi",
        d: () => { }
    }
};

const result = getDeepValue(obj, "bar", "c");
console.log('result: ', result);