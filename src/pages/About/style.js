import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: left;
    margin-top: 0.2%;
    
    justify-content: center;
    flex-direction: column;
    width: 150%;
    box-shadow: 0 1px 2px #0003;
    background-color: #87CEFA;
    max-width: 550px;
    padding: 20px;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 35px;
    font-weight: 600;
    color: #1A74AE;
    padding-bottom: 10px;
    margin-top: 10px;
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    color: #676767;
`;

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }
`;


