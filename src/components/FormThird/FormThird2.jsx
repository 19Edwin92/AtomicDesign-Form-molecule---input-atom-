import React from 'react'
import AtomicInput from './AtomicInput'
import { useLoginForm } from './useLoginForm';
import { inputList2 } from './inputlist';

function FormThird2() {
  const [formState, setFormState,handleInputChange] = useLoginForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({})
    alert(JSON.stringify(formState))
  };  

  return (
    <form onSubmit={handleSubmit}>
      {inputList2.map((input, index) => (
        <div key={index}>
          <AtomicInput
            label={input.label}
            inputProps={{
              type: input.type,
              name: input.name,
              value: formState[input.name] || '',
              onChange: handleInputChange,
            }}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormThird2;