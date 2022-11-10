import React, { ChangeEvent, FC } from 'react';
import { SignupFormValues } from '../interfaces';

type SignupFormProps = {
  signupForm: SignupFormValues;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  successMessage: string;
};
const SignupForm: FC<SignupFormProps> = ({
  signupForm,
  onInputChange,
  errorMessage,
  successMessage,
}: SignupFormProps) => {
  return (
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
            onChange={onInputChange}
            required
            placeholder='FÖRNAMN'
          />
          <input
            className='bg-gray-100 p-3 m-2 lg:w-full text-xs font-semibold'
            value={signupForm.lName}
            name='lName'
            onChange={onInputChange}
            required
            placeholder='EFTERNAMN'
          />
          <input
            className='bg-gray-100 p-3 m-2 lg:w-full text-xs font-semibold'
            value={signupForm.email}
            name='email'
            onChange={onInputChange}
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
  );
};

export default SignupForm;
