import React from 'react';
import styled from 'styled-components';

const AtomicInput = ({ label, inputProps }) => (
  <DivFlex>
    <Label>{label}</Label>
    <StyledInput {...inputProps} />
  </DivFlex>
);

export default AtomicInput;

const DivFlex = styled.div`
  display:flex;
  width:100%;
`

const StyledInput = styled.input`
  display:flex;
  flex-grow: 1;
  box-sizing:border-box;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Label = styled.label`
  display:block;
  width:80px
`