import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './guards';
import { Login, NotFound, Private } from './pages';
import { PrivateRoutes, PublicRoutes } from './routes';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
        <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
