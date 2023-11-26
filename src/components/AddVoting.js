import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './Form.css';

export default function AddVoting() {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      options: [{ optionText: '' }], // Initial option
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="registerForm">
      <h1>Create your poll:</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <label>Poll name: </label>
            <input {...register('poll_name', { required: true })} placeholder='Poll name' />
            {errors.poll_name && <p>Poll name is required.</p>}
          </li>
          <li>
            <label>Type: </label>
            <select {...register('poll_type')}>
              <option value="other">other</option>
              <option value="food">food</option>
              <option value="people">people</option>
              <option value="sport">sport</option>
            </select>
          </li>
          <li>
            <label>Options: </label>
            {fields.map((option, index) => (
              <div key={option.id} className="option-container">
                <input
                  {...register(`options.${index}.optionText`, { required: true })}
                  placeholder={`Option ${index + 1}`}
                />
                <button type="button" className='remove' onClick={() => remove(index)}>
                  <FaMinus />
                </button>
              </div>
            ))}
            <button className='addButton' onClick={() => append({ optionText: '' })}>
              <FaPlus />
              <span className='add-option-text'>Add an option</span>
            </button>
          </li>
          <li>
            <input type="submit" value="Create Poll" />
          </li>
        </ul>
      </form>
    </div>
  );
}