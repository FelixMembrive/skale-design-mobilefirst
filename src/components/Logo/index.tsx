import logo from "../../assets/images/logo.png"
import logoHorizontal from "../../assets/images/logo-horizontal.png"
import logoMontanhas from "../../assets/images/logo-montanhas.png"
import { LogoStyle } from "./style"


export default function Logo() {
    return (
        <LogoStyle>
            <img src={logo} alt="Logo Skale" />
        </LogoStyle>
    )
}