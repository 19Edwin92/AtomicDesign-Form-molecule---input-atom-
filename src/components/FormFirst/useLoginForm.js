import { useState } from "react";

export const useLoginForm = () => {
  const [formState, setFormState] = useState({});

  const handleInputChange = (event) => {
    event.persist();
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const inputList = [
    { label: 'Email', type: 'email', name: 'email', value: formState.email || '', onChange: handleInputChange },
    { label: 'Password', type: 'password', name: 'password', value: formState.password  || '', onChange: handleInputChange },
    { label: 'Nickname', type: 'text', name: 'nickname', value: formState.nickname  || '', onChange: handleInputChange },
  ];

  return [inputList, formState,setFormState];
};