import { Link } from 'react-router-dom';
import './Register.scss';
const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Wktn Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil
            voluptatem ipsam, facere voluptatibus quo?
          </p>
          <span>Don't you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form action=''>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Name' />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
