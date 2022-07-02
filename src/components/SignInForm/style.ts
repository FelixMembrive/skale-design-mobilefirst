import styled from "styled-components"

export const SignInFormStyle = styled.form`
    display: flex;
    flex-direction: column;

    >h1 {
        margin: 0 auto 32px;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        color: #003461;

        /* line-height: 55px;
        text-align: center */
    }

    >div {
        margin: 32.5px auto;

        >a >img {
            margin-right: 4.5px;
            margin-left: 4.5px;
        }
    }

    >input {
        font-family: 'Courier New';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;

        margin: auto;
        margin-top: 16px;
        box-sizing: border-box;
        padding: 16px;
        width: 70%;
        height: 37px;
        max-width: 400px;
        border: 1px solid #E6E6E6;
        border-radius: 8px;

        &:focus-visible {
                outline: none;
            }
    }
`