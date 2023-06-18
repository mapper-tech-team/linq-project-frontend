import React from 'react'
import * as C from './style';

const Input = ({ type, placeholder, value, onChange }) => {
  return(
    <C.InputWrapper>
      <C.Input 
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </C.InputWrapper>
  ) 
};

export default Input