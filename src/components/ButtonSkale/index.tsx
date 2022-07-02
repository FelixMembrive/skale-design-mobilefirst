import { Children, HtmlHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { ButtonSkaleStyle } from "./style";

interface ButtonSkaleProps {
    text: string
    redirect: string
    border: string
    fontSize: string
}

export default function ButtonSkale(props: ButtonSkaleProps) {
    return (
        <ButtonSkaleStyle fontSize={props.fontSize} border={props.border}>
            <Link to={props.redirect}>{props.text}</Link>
        </ButtonSkaleStyle>
    )
}