import { FC } from "react";

type RenderButtonWithProps = {
    label: string, 
    onClickCallback: ()  => void
};

const RenderButtonWithProps: FC<RenderButtonWithProps> = (props: RenderButtonWithProps): JSX.Element => {
    const {
        label = "Default Label",
        onClickCallback
    } = props;
    
    return <button onClick={onClickCallback}>{label}</button>
}

export default RenderButtonWithProps; 