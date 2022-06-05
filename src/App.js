import { Route, Routes } from 'react-router-dom';
import Statebar from './pages/rootView/Statebar';
import Intro from './pages/rootView/Intro';
import Home from './pages/rootView/Home';
import Search from './pages/rootView/Search';
import Login from './pages/account/Login';
import Join from './pages/account/Join';
import MyPage from './pages/account/MyPage';
import Find from './pages/account/Find';
import PwdReset from './pages/account/PwdReset';
import AccountModify from './pages/account/AccountModify';
import Notice from './pages/notice/Notice';
import NoticeWrite from './pages/notice/NoticeWrite';
import Business from './pages/business/Business';
import ShopAdd from './pages/business/ShopAdd';
import CoffeeTIFirst from './pages/coffeeTI/CoffeeTIFirst';
import CoffeeTIResult from './pages/coffeeTI/CoffeeTIResult';
import CoffeeTIBody from './pages/coffeeTI/CoffeeTIBody';
import ShopModify from './pages/business/ShopModify';
import NoticeContent from './pages/notice/NoticeContent';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Statebar />}>
        <Route path='/dangwonkeoyeo' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/pwdreset' element={<PwdReset />} />
        <Route path='/accountmodify' element={<AccountModify />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/notice/content' element={<NoticeContent />} />
        <Route path='/notice/noticeWrite' element={<NoticeWrite />} />
        <Route path='/find' element={<Find />} />
        <Route path='/business' element={<Business />} />
        <Route path='/shopadd' element={<ShopAdd />} />
        <Route path='/shopmodify' element={<ShopModify />} />
        <Route path='/coffeeTI/first' element={<CoffeeTIFirst />} />
        <Route path='/coffeeTI/body' element={<CoffeeTIBody />} />
      </Route>
    </Routes>
  );
};

export default App;
