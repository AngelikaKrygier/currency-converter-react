import styled from "styled-components";

export const Fieldset = styled.fieldset`
    background-color: #eeeeeeef;
    border: solid 1px #9b9a9a;
    max-width: 600px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 0px 30px 0px #A3A3A3;
    padding: 20px;
    margin: auto;
`;

export const Legend = styled.legend`
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 10px;
    background-color: rgb(0 20 164 / 68%);
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

export const Select = styled.select`
    padding: 8px;
    border: solid 1px #bbb;
    border-radius: 5px;
    max-width: 300px;
    width: 100%;
    font-size: 18px;
`

export const Button = styled.button`
    position: relative;
    max-width: 650px;
    width: 100%;
    padding: 10px;
    margin: 10px auto;
    background-color: rgb(0 20 164 / 68%);
    display: flex;
    justify-content: center;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;

    &:hover{
        background-color: rgba(0, 19, 164, 0.863); 
    }
`