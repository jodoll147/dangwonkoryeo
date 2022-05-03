import { Route, Routes } from 'react-router-dom';
import Home from './pages/RootView/Home';
import Login from './pages/Login';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import Intro from './pages/Intro';
import CoffeeTI from './pages/CoffeeTI';
import Notice from './pages/Notice';
import Find from './pages/Find';
import FAQ from './pages/FAQ';
import ServiceCenter from './pages/ServiceCenter';
import NoticeWrite from './pages/NoticeWrite';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/join' element={<Join />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/servicecenter' element={<ServiceCenter />} />
        <Route path='/find' element={<Find />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/notice/notice_write' element={<NoticeWrite />} />
      </Route>
      <Route path='/coffeeTI' element={<CoffeeTI />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default App;
