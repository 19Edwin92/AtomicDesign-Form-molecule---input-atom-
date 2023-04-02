import React from 'react'
import AtomicInput from './AtomicInput'
import { useLoginForm } from './useLoginForm';

function FormSecend1() {
  const [formState, setFormState,handleInputChange] = useLoginForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({})
    alert(JSON.stringify(formState))
  };  

  const inputList = [
    { label: 'Email', type: 'email', name: 'email', value: formState.email || '', onChange: handleInputChange },
    { label: 'Password', type: 'password', name: 'password', value: formState.password  || '', onChange: handleInputChange },
    { label: 'Nickname', type: 'text', name: 'nickname', value: formState.nickname  || '', onChange: handleInputChange },
  ];

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

export default FormSecend1;