import React, { ChangeEvent, FC } from 'react';

type PersonalDataCheckboxProps = {
  handlePersonalData: boolean;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const PersonalDataCheckbox: FC<PersonalDataCheckboxProps> = ({
  handlePersonalData,
  onInputChange,
}: PersonalDataCheckboxProps) => {
  return (
    <div className='lg:w-1/3 lg:h-64'>
      <div>
        <div className='mt-2'>
          <label className='inline-flex items-center'>
            <input
              checked={handlePersonalData}
              onChange={onInputChange}
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
  );
};

export default PersonalDataCheckbox;
