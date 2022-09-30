import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Private } from './components';
import { AuthGuard } from './guards';
import { User } from './models';
import { Login, NotFound } from './pages';
import { PrivateRoutes, PublicRoutes } from './routes';

const App = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const navigate = useNavigate();

  const loginHandler = (user: User | undefined) => {
    setUser(user);
    if (user) navigate('private');
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
        <Route element={<AuthGuard user={user} />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
        <Route path={PublicRoutes.LOGIN} element={<Login login={loginHandler} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
