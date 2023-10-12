import { Link, useLocation } from 'react-router-dom';
import defaultImg from '../images/default-movie@1x.jpg';

const NotFound = () => {
  const location = useLocation();
  const backHomeLink = location.state?.from ?? '/';

  return (
    <div>
      <img src={defaultImg} alt="Smth went wrong" width={'200px'} />
      <p>
        Ooops, sorry, we didn`t find the movie. You can return home and try
        again.
      </p>
      <Link to={backHomeLink}>Return Home</Link>
    </div>
  );
};

export default NotFound;

// import { useNavigate } from 'react-router-dom';

// export const Login = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async values => {
//     const response = await FakeAPI.login(values);
//     if (response.success) {
//       navigate('/profile', { replace: true });
//     }
//   };

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };
