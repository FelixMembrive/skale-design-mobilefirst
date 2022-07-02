import { Link } from "react-router-dom";
import { ButtonSkaleSubmitStyle } from "./style";

interface ButtonSkaleSubmitProps{
    text: string
}

export default function ButtonSkaleSubmit(props:ButtonSkaleSubmitProps ) {
    return (
        <ButtonSkaleSubmitStyle type="submit">{props.text}</ButtonSkaleSubmitStyle>
    )
}