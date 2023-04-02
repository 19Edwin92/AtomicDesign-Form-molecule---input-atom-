import React from 'react'
import AtomicInput from './AtomicInput'
import { useLoginForm } from './useLoginForm';
import { inputList1 } from './inputlist';

function FormThird1() {
  const [formState, setFormState,handleInputChange] = useLoginForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({})
    alert(JSON.stringify(formState))
    
  };  

  return (
    <form onSubmit={handleSubmit}>
      {inputList1.map((input, index) => (
          <AtomicInput
            key={index}
            label={input.label}
            inputProps={{
              type: input.type,
              name: input.name,
              value: formState[input.name] || '',
              onChange: handleInputChange,
            }}
          />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormThird1;