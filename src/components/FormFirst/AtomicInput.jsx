import React from 'react';
import styled from 'styled-components';

const AtomicInput = ({ label, inputProps }) => (
  <>
    <Label>{label}</Label>
    <StyledInput {...inputProps} />
  </>
);

export default AtomicInput;

const StyledInput = styled.input`
  padding: 0 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Label = styled.label`
  display:inline-block;
  width:80px
`