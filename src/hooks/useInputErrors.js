import { useState } from "react";

export default function useInputErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    if(!message) {
      removeError(field);
      return;
    }

    const error = errors.find((errorObj) => errorObj.field === field);
    if(error) {
      removeError(field);
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(field) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== field,
    ));
  }

  function getMessageByField(field) {
    const message = errors.find((error) => error.field === field)?.message;

    return message;
  }

  return {
    errors, setError, removeError, getMessageByField,
  }
}