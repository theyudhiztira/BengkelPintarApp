import React from 'react'
import {useContextMultipleForm} from '../../context/formContext';
import StepOne from './step_one';
import StepTwo from './step_two';

const RegisterScreen = ({navigation}) => {
  const multiStepFormContext = useContextMultipleForm();

  const stepForm = (step) => {
    switch (step) {
      case 1:
        return <StepOne navigation={navigation}/>
      default:
        return <StepTwo />
    }
  }


  return (
    <>
    {
      stepForm(multiStepFormContext.step)
    }
    </>
  )
}

export default RegisterScreen