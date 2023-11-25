import { useForm } from 'react-hook-form';
import './Form.css'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password', '');

  return (
    <div className = 'registerForm'>
      <h1>Login:</h1>
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <ul >
        <li>
          <label> Username: </label>
          <input {...register('username', { required: true })} placeholder='Username' />
          {errors.username && <p>Username is required.</p>}
        </li>
        <li>
          <label> Password: </label>
            <input {...register('password', { required: true })} type='password' placeholder='Password' />
            {errors.password && <p>Password is required.</p>}
        </li>
        <li>
          <input type="submit" value="Log in" />
        </li>
      </ul>
    </form>
    </div>
  );
}