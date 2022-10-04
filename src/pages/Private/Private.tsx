import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../../components';
import { Home, Dashboard, Profile } from '../Private';
import { NotFound } from '../../pages';

const Private = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Private;
