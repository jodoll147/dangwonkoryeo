import { Link, Outlet } from 'react-router-dom';
import CoffeTIContainer from './styled/CoffeeTIContainer';

const CoffeeTI = () => {
  return (
    <CoffeTIContainer>
      <header>
        <section align='center'>
          <div className='back'>
            <div class='container'>
              <div className='logo'>
                <Link to='/' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                  당원커여
                </Link>
              </div>
              <div className='coffeeti'>
                <p>CoffeeTI</p>
              </div>
              <div className='box'></div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <Outlet />
      </main>
    </CoffeTIContainer>
  );
};

export default CoffeeTI;
