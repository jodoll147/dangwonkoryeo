import { Route, Routes } from 'react-router-dom';
import Statebar from './pages/RootView/Statebar';
import Home from './pages/RootView/Home';
import Login from './pages/Login';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import Intro from './pages/Intro';
import Notice from './pages/Notice';
import Find from './pages/Find';
import NoticeWrite from './pages/NoticeWrite';
import Business from './pages/Business';
import ShopAdd from './pages/ShopAdd';
import CoffeeTIFlavour from './pages/CoffeeTIPage/CoffeeTIFlavour';
import CoffeeTIFirst from './pages/CoffeeTIPage/CoffeeTIFirst';
import CoffeeTIResult from './pages/CoffeeTIPage/CoffeeTIResult';
import CoffeeTIBody from './pages/CoffeeTIPage/CoffeeTIBody';
import CoffeeTISour from './pages/CoffeeTIPage/CoffeeTISour';
import ShopModify from './pages/ShopModify';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Statebar />}>
        <Route path='/home' element={<Home />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/notice' element={<Notice />} />z
        <Route path='/find' element={<Find />} />
        <Route path='/notice/noticeWrite' element={<NoticeWrite />} />
        <Route path='/business' element={<Business />} />
        <Route path='/shopadd' element={<ShopAdd />} />
        <Route path='/shopmodify' element={<ShopModify />} />
        <Route path='/coffeeTI/first' element={<CoffeeTIFirst />} />
        <Route path='/coffeeTI/body' element={<CoffeeTIBody />} />
        <Route path='/coffeeTI/sour' element={<CoffeeTISour />} />
        <Route path='/coffeeTI/flavour' element={<CoffeeTIFlavour />} />
        <Route path='/coffeeTI/result' element={<CoffeeTIResult />} />
      </Route>
    </Routes>
  );
};

export default App;
