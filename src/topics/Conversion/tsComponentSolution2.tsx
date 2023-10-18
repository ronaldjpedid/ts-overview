import { FC } from "react";

interface RenderButtonWithProps{
    label: string, 
    onClickCallback: ()  => void
};

const RenderButtonWithProps: FC<RenderButtonWithProps> = (props: RenderButtonWithProps): JSX.Element => {
    const {
        label,
        onClickCallback
    } = props;
    
    return <button onClick={onClickCallback}>{label}</button>
}

export default RenderButtonWithProps; 