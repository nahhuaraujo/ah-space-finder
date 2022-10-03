import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../../components';
import { Home, Profile } from '../';

const Private = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<h1>Soy el dashboard</h1>} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Private;
