const NotFound = () => {
  return (
    <div>
      <img src="" alt="Smth went wrong" />
      <p>
        Ooops, sorry, we didn`t find the movie. You can return home and try
        again.
      </p>
      <button type="button">Return Home</button>
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
