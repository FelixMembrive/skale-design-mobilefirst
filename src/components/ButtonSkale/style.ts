import styled from "styled-components"
import {ButtonSkaleSubmitStyle} from "../ButtonSkaleSubmit/style"

interface ButtonSkaleStyleProps {
    border: string,
    fontSize: string
}

export const ButtonSkaleStyle = styled(ButtonSkaleSubmitStyle)<ButtonSkaleStyleProps>`
    background: none;
    border: ${props => props.border} solid #0083CA;
    font-size: ${props => props.fontSize};
    border-radius: 8px;
        >a{
            color: #393737;
            text-decoration: none;
        }
`