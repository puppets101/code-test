import React, { ChangeEvent, FC, useState } from 'react';
import { SignupFormValues } from '../interfaces';
import SignupForm from './SignupForm';
import axios from 'axios';
import PersonalDataCheckbox from './PersonalDataCheckbox';

const Newsletter: FC = () => {
  const [signupForm, setSignupForm] = useState<SignupFormValues>({
    fName: '',
    lName: '',
    email: '',
    handlePersonalData: false,
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const clearInputFields = () => {
    setSignupForm({
      fName: '',
      lName: '',
      email: '',
      handlePersonalData: false,
    });
    setError(true);
  };

  const validateEmail = (email: string) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      return true;
    }
    return false;
  };

  const validateForm = () => {
    const { fName, lName, email } = signupForm;
    if (!fName || !lName || validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    validateForm();
    const field = event.target.name;
    const value = event.target.value;
    if (field === 'handlePersonalData') {
      setSignupForm({
        ...signupForm,
        [field]: event.target.checked,
      });
      return;
    }
    if (!value) {
      setSignupForm({ ...signupForm, [field]: event.target.value });
      setError(true);
      return;
    }
    setSignupForm({ ...signupForm, [field]: event.target.value });
  };

  const handleSubmitForm = async (values: SignupFormValues) => {
    const { fName, lName, email, handlePersonalData } = values;

    const payload = {
      firstName: fName,
      lastName: lName,
      email: email,
      handlePersonalData: handlePersonalData,
    };

    try {
      const { data } = await axios({
        url: '/api/signup-form',
        method: 'POST',
        data: payload,
      });
      console.log(data);
      setSuccessMessage(data.msg);
    } catch (error) {
      console.log(
        'Error!',
        `The server responed with a ${error.response.status} status. ${error.response.data.msg}`
      );
      setErrorMessage(error.response.data.msg);
      return;
    }
    clearInputFields();
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='lg:mt-4'>
        <p className='text-center text-2xl font-semibold'>
          Nyhetsbrev <br /> Få 10% På Ditt Första Köp
        </p>
      </div>
      <SignupForm
        signupForm={signupForm}
        onInputChange={handleInputChange}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <div className='lg:w-full mt-4'>
        <div className='lg:container lg:flex justify-center'>
          <PersonalDataCheckbox
            handlePersonalData={signupForm.handlePersonalData}
            onInputChange={handleInputChange}
          />
          <div className='lg:w-1/3 lg:h-64 mb-8'>
            <div className='flex lg:justify-end w-full'>
              <button
                onClick={() => handleSubmitForm(signupForm)}
                className={`${
                  !error
                    ? 'bg-orange-500 opacity-90 font-normal hover:bg-white hover:border-2 hover:border-black text-white hover:text-black py-2 w-full lg:w-1/2'
                    : 'bg-gray-300 opacity-90 font-normal text-white py-2 w-full lg:w-1/2'
                } `}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
