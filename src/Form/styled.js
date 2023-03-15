import styled from "styled-components";

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.color.cornFloweBlue};
    border: solid 1px ${({ theme }) => theme.color.dustyGrey};
    max-width: 600px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.color.black};
    padding: 20px;
    margin: auto;
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.kleinBlue};
`;

export const LabelText = styled.span`
    display: inline-block;
    max-width: 200px;
    width: 100%;
    font-size: 20px;
`;

export const Input = styled.input`
    padding: 8px;
    border: solid 1px #bbb;
    border-radius: 5px;
    max-width: 300px;
    width: 100%;
    font-size: 18px;
`;

export const Button = styled.button`
    position: relative;
    max-width: 650px;
    width: 100%;
    padding: 10px;
    margin: 10px auto;
    background-color: ${({ theme }) => theme.color.kleinBlue};
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 10px;
    font-size: 18px;

    &:hover{
        filter: brightness(120%);
    }
`;

export const Loading = styled.p`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    justify-content: center;
    border-radius: 10px;
    font-size: 18px;
    padding: 50px;
`;

export const Error = styled.p`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    justify-content: center;
    border-radius: 10px;
    font-size: 18px;
    padding: 50px;
`
export const Message = styled.p`
    color: ${({ theme }) => theme.color.black};
    display: flex;
    justify-content: center;
    font-size: 15px;
    text-align: center;
`