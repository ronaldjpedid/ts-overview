import { Component, FC } from "react";

const MyComponent = (props: { text: string }): null => {
    return null;
};

/** This helper type lets your infer props from functional or class based components */
type PropsFrom<TComponent> = TComponent extends FC<infer Props> ?
    Props : TComponent extends Component<infer Props> ?
    Props : never;

const props: PropsFrom<typeof MyComponent> = {
    text: "Hello World"
}

/** This Helper Function let your i */
type ExtractReturnType<TRT> = TRT extends (...args: any[]) => infer RT ? RT : never;

type ReturnTypeFrom = ExtractReturnType<typeof MyComponent>

const returnType: ReturnTypeFrom = MyComponent({text: "Hello World"});
console.log('returnType: ', returnType);