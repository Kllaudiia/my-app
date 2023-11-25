import { useForm } from 'react-hook-form';
import './Form.css'

export default function Register() {
      const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

      const password = watch('password', '');

      return (
        <div className = 'registerForm'>
          <h1>Register:</h1>
          
          <a href='/login'> Already registered? Log in.</a>
          
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <ul >
            <li>
              <label> Username: </label>
              <input {...register('username', { required: true })} placeholder='Username' />
              {errors.username && <p>Username name is required.</p>}
            </li>
            <li>
              <label> Gender: </label>
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </li>
            <li>
              <label> Age: </label>
              <input {...register('age', { pattern: /\d+/ , min: 18, max: 99, required: true})} placeholder='Age'/>
              {errors.age && <p>Please enter number for age.</p>}
            </li>
            <li>
              <label> Password: </label>
                <input {...register('password', { required: true })} type='password' placeholder='Password' />
                {errors.password && <p>Password is required.</p>}
            </li>
            <li>
              <label> Repeat password: </label>
                <input {...register('password2', { required: true, validate: (value) => value === password })} type='password' placeholder='Repeated Password' />
                {errors.password2 && <p>Passwords do not match.</p>}
            </li>
            <li>
              <input type="submit" value="Register Now"/>
            </li>
          </ul>
        </form>
        </div>
      );
    }