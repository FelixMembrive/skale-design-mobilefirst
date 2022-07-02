import { Routes, Route, Link } from "react-router-dom";
import H1pagina1 from "../../components/H1-pagina1";
import Logo from "../../components/Logo";
import SignInForm from "../../components/SignInForm";
import { LoginPageStyle } from "./style";

export default function Home() {
    return (
        <LoginPageStyle>
            <Link className="skip-button" to="../page2">skip</Link>
            <Logo />
            <SignInForm />
        </LoginPageStyle>
    )
}
