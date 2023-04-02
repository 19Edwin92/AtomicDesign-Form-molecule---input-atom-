import React from 'react'
import AtomicInput from './AtomicInput'
import { useLoginForm } from './useLoginForm';

function FormFirst() {
  const [inputList, formState,setFormState] = useLoginForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({})
    alert(JSON.stringify(formState))
  };  

  return (
    <form onSubmit={handleSubmit}>
      {inputList.map((input, index) => (
        <div key={index}>
          <AtomicInput
            label={input.label}
            inputProps={{
              type: input.type,
              name: input.name,
              value: input.value,
              onChange: input.onChange,
            }}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormFirst;