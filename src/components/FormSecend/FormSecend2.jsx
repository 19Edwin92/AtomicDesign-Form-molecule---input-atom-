import React from 'react'
import AtomicInput from './AtomicInput'
import { useLoginForm } from './useLoginForm';

function FormSecend2() {
  const [formState, setFormState,handleInputChange] = useLoginForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({})
    alert(JSON.stringify(formState))
    
  };  

  const inputList = [
    { label: 'title', type: 'text', name: 'title', value: formState.title || '', onChange: handleInputChange },
    { label: 'nickname', type: 'text', name: 'nickname', value: formState.nickname  || '', onChange: handleInputChange },
    { label: 'date', type: 'date', name: 'date', value: formState.date  || '', onChange: handleInputChange },
    { label: 'comment', type: 'text', name: 'comment', value: formState.comment  || '', onChange: handleInputChange },
    { label: 'desc', type: 'text', name: 'desc', value: formState.desc  || '', onChange: handleInputChange },
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

export default FormSecend2;