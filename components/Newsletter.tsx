import React, { useState } from 'react';
import axios from 'axios';

type SignupForm = {
  fName: string;
  lName: string;
  email: string;
  handlePersonalData: boolean;
};
const Newsletter = () => {
  const [signupForm, setSignupForm] = useState<SignupForm>({
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

  const handleInputChange = (event: any) => {
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

  const handleSubmitForm = async (event: any) => {
    event.preventDefault();
    const { fName, lName, email, handlePersonalData } = signupForm;

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
      <div className='lg:container flex justify-center items-center lg:flex-row mt-8 flex-col w-full'>
        <img
          className='lg:w-1/3 h-64 object-cover'
          src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
          alt='Image'
        />
        <div className='bg-white lg:flex justify-center items-center lg:w-1/3 w-full lg:h-64'>
          <div className='flex flex-col lg:full'>
            <input
              className='bg-gray-100 p-3 m-2 lg:w-full text-xs font-semibold'
              value={signupForm.fName}
              name='fName'
              onChange={handleInputChange}
              required
              placeholder='FÖRNAMN'
            />
            <input
              className='bg-gray-100 p-3 m-2 lg:w-full text-xs font-semibold'
              value={signupForm.lName}
              name='lName'
              onChange={handleInputChange}
              required
              placeholder='EFTERNAMN'
            />
            <input
              className='bg-gray-100 p-3 m-2 lg:w-full text-xs font-semibold'
              value={signupForm.email}
              name='email'
              onChange={handleInputChange}
              required
              placeholder='E-POSTADRESS'
            />
            {errorMessage && (
              <p className='ml-2 text-red-500 text-xs italic'>{errorMessage}</p>
            )}
            {successMessage && (
              <p className='lg:ml-2 text-green-500 text-xs italic text-center w-full'>
                {successMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='lg:w-full mt-4'>
        <div className='lg:container lg:flex justify-center'>
          <div className='lg:w-1/3 lg:h-64'>
            <div>
              <div className='mt-2'>
                <label className='inline-flex items-center'>
                  <input
                    checked={signupForm.handlePersonalData}
                    onChange={handleInputChange}
                    name='handlePersonalData'
                    type='checkbox'
                    className='w-6 h-6'
                  />
                  <p className='ml-3 text-neutral-800 opacity-80 font-light text-xs'>
                    Jag accepterar hantering av personuppgifter.
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 lg:h-64 mb-8'>
            <div className='flex lg:justify-end w-full'>
              <button
                onClick={handleSubmitForm}
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
