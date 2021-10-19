import React, { createContext, useContext, useState } from 'react'

export const MultiStepFormContext = createContext();
export const RegisterContext = createContext();

export const useContextMultipleForm = () => {
  return useContext(MultiStepFormContext);
}
export const useContextRegister = () => {
  return useContext(RegisterContext);
}

export const FormContext = ({children}) => {
  const [step, setStep] = useState(1);
  const [registerData, setRegisterData] = useState({});

  return (
    <MultiStepFormContext.Provider 
      value={{step, setStep}}
    >
      <RegisterContext.Provider
        value={{registerData, setRegisterData}}
      >
        {children}
      </RegisterContext.Provider>
    </MultiStepFormContext.Provider>
  )
}

