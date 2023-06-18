import React from 'react'
import * as C from './style';

const RequiredInput = ({ type, placeholder, value, onChange }) => {
  return(
    <C.RequiredInputWrapper>
      <C.RequiredInput 
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      <span></span>
    </C.RequiredInputWrapper>
  ) 
};

export default RequiredInput