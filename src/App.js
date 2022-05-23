import { Route, Routes } from 'react-router-dom';
import Statebar from './pages/rootView/Statebar';
import Intro from './pages/rootView/Intro';
import Home from './pages/rootView/Home';
import LandMark from './pages/rootView/LandMark';
import Login from './pages/account/Login';
import Join from './pages/account/Join';
import MyPage from './pages/account/MyPage';
import Find from './pages/account/Find';
import Notice from './pages/notice/Notice';
import NoticeWrite from './pages/notice/NoticeWrite';
import Business from './pages/business/Business';
import ShopAdd from './pages/business/ShopAdd';
import CoffeeTIFlavour from './pages/coffeeTI/CoffeeTIFlavour';
import CoffeeTIFirst from './pages/coffeeTI/CoffeeTIFirst';
import CoffeeTIResult from './pages/coffeeTI/CoffeeTIResult';
import CoffeeTIBody from './pages/coffeeTI/CoffeeTIBody';
import CoffeeTISour from './pages/coffeeTI/CoffeeTISour';
import ShopModify from './pages/business/ShopModify';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Statebar />}>
        <Route path='/home' element={<Home />} />
        <Route path='/landmark' element={<LandMark />} />
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
