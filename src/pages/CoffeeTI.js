import { Link, Outlet } from 'react-router-dom';
import CoffeTIContainer from './styled/CoffeeTIContainer';

const CoffeeTI = () => {
  return (
    <CoffeTIContainer>
      <header>
        <section>
          <p>coffeeTI</p>
        </section>
      </header>
      <main>
        <Outlet />
      </main>
    </CoffeTIContainer>
  );
};

export default CoffeeTI;
