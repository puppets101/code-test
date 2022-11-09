import React, { ChangeEvent, useState } from 'react';

const Newsletter = () => {
  const [handlePersonalData, setHandlePersonalData] = useState(false);
  const toggleHandlePersonalData = (event: ChangeEvent<HTMLInputElement>) => {
    setHandlePersonalData(event.target.checked);
  };

  return (
    <form action='/api/signup-form' method='post'>
      <div className='flex justify-center items-center flex-col'>
        <div>
          <p className='text-center text-2xl font-semibold'>
            Nyhetsbrev <br /> Få 10% På Ditt Första Köp
          </p>
        </div>
        <div className='container flex justify-center items-center flex-row mt-8 w-full'>
          <img
            className='w-1/3 h-64 object-cover'
            src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
            alt='Image'
          />
          <div className='bg-white flex justify-center items-center w-1/3 h-64'>
            <div className='flex flex-col'>
              <input
                className='bg-gray-100 p-2 m-2 w-full'
                id='fName'
                type='text'
                name='fName'
                required
                placeholder='FÖRNAMN'
              />
              <input
                className='bg-gray-100 p-2 m-2 w-full'
                id='lName'
                type='text'
                name='lName'
                required
                placeholder='EFTERNAMN'
              />
              <input
                className='bg-gray-100 p-2 m-2 w-full'
                id='email'
                type='email'
                name='email'
                required
                placeholder='E-POSTADRESS'
              />
            </div>
          </div>
        </div>
        <div className='w-full mt-4'>
          <div className='container flex justify-center'>
            <div className='w-1/3 h-64'>
              <div>
                <div className='mt-2'>
                  <label className='inline-flex items-center'>
                    <input
                      checked={handlePersonalData}
                      onChange={toggleHandlePersonalData}
                      id='handlePersonalData'
                      type='checkbox'
                      name='handlePersonalData'
                      className='w-6 h-6'
                    />
                    <p className='ml-3 text-neutral-800 opacity-80 font-light'>
                      Jag accepterar hantering av personuppgifter.
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className='w-1/3 h-64'>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='bg-orange-500 opacity-90 font-normal hover:bg-white text-white hover:text-black py-2 px-16'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Newsletter;
