import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Home, Login, NotFound } from './components';
import { AuthGuard } from './guards';
import { User } from './models';
import { PrivateRoutes, PublicRoutes } from './routes';

const App = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const navigate = useNavigate();

  const loginHandler = (user: User | undefined) => {
    setUser(user);
    if (user) navigate('/home');
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route element={<AuthGuard user={user} />}>
          <Route path={PrivateRoutes.HOME} element={<Home />} />
        </Route>
        <Route path={PublicRoutes.LOGIN} element={<Login login={loginHandler} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
