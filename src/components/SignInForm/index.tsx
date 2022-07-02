import { Link } from "react-router-dom";
import { SignInFormStyle } from "../SignInForm/style"
import LogoGmail from "../../assets/images/gmail.png"
import LogoApple from "../../assets/images/apple.png"
import styled from "styled-components"
import ButtonSkale from "../ButtonSkale";
import ButtonSkaleSubmit from "../ButtonSkaleSubmit";

export default function SignInForm() {
    return (
        <SignInFormStyle className="SignInForm" action="submit">
            <h1>Sign in</h1>

            <input className="EmailInput" required placeholder="Email addres" type="text" />
            <input className="PasswordInput" required placeholder="Password" type="password" />

            <div className="gmail-apple">
                <Link to="../page1" >
                    <img src={LogoGmail} alt="" />
                </Link>
                <Link to="../page1">
                    <img src={LogoApple} alt="" />
                </Link>
            </div>

            <ButtonSkaleSubmit text="Sign in"></ButtonSkaleSubmit>
            <ButtonSkale fontSize="12px" border="none" text="Forgot password?" redirect="../page2"></ButtonSkale>
            <ButtonSkale fontSize="" border="1px" text="Create account" redirect="../page1"></ButtonSkale>
        </SignInFormStyle>
    )
}
interface CoresBotao{
    [key: string]: string
}

const coresBotao: CoresBotao = {
    sucesso: "green",
    alert: "yellow",
    error: "red"
}

interface BotaoDefaultProps {
    cor: string
}

const SignInFormStyle2 = styled.form<BotaoDefaultProps>`
    display: flex;
    flex-direction: column;

    >button {
        margin: auto;
        box-sizing: border-box;
        width: 70%;
        height: 40px;
        max-width: 266px;
        border-radius: 6px;
        background-color: ${(props) => coresBotao[props.cor]};
}

    >a {
        text-decoration: none;

        
}
`
