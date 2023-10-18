import { FC } from "react";


                             /** Type Args */                                       /**Function Args */    /** Return Type */           
const RenderButtonWithProps: FC<{title: string, onClickCallback: ()  => void}> = ({title, onClickCallback}): JSX.Element => {
    return <button onClick={onClickCallback}>{title}</button>
}

export default RenderButtonWithProps;