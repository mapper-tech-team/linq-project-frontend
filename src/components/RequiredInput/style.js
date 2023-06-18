import styled from "styled-components";

export const RequiredInputWrapper = styled.div`
  position: relative;
  width: 100%
`;

export const RequiredInput = styled.input.attrs({ required: true })`
    outline: none;
    padding: 16px 20px;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f0f2f5;
    border: none;

    &:required {
    & + span::before {
      content: '* Obrigatório';
      font-size: 8px;
      color: red;
      position: absolute;
      top: 0;
      right: 5px;
    }
  }

`;