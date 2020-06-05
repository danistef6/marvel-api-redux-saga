import styled from 'styled-components';
import { Field } from "formik";

export const DivMainStyle = styled.div`
        display: flex;
        flex-direction: row;
        `;
export const DivSearchStyle = styled.div`
        margin: 0 auto;
        width: 1000px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        `;
export const LabelStyle = styled.label`
        margin: 30px;
        color: red;
        font: bold 30px Helvetica, SansSerif;
        `;
export const ErrorStyle = styled.label`
        margin-left: 50px;
        color: red;
        font: bold 15px Helvetica, SansSerif;
        `;
export const SearchStyle = styled(Field)`
        margin: 30px 30px 0 30px;
        box-sizing: contentBox;
        height: 30px;
        padding: 0 250px 0 10px;
        border-color: #888;
        border-radius: 35px;
        border-style: solid;
        border-width: 5px

        ${({ error }) =>
        error && `
        border-color: red;

    `}
        `;
export const ButtonStyle = styled.button`
        margin: 30px;
        height: 40px;
        width: 140px;
        background: White;
        border-radius: 10px;
        font: bold 25px Helvetica, SansSerif;
        text-align: center;
        color: red;
        `;
export const DivErrorStyle = styled.div`
        display: flex;
        flex-direction: column;
        `;