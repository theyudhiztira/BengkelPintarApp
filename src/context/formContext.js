import React, { createContext, useContext, useState } from 'react'

export const MultiStepFormContext = createContext();
export const useContextMultipleForm = () => {
  return useContext(MultiStepFormContext);
}

export const FormContext = ({children}) => {
  const [step, setStep] = useState(1);
  const [registerfield, setRegisterField] = useState({});

  return (
    <MultiStepFormContext.Provider 
      value={{step, setStep}}
    >
      {children}
    </MultiStepFormContext.Provider>
  )
}

