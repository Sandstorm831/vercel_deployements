import './App.css';
import { Outlet } from 'react-router-dom';
import Header from '../../components/shopping_cart_components/header/index';
import { RecoilRoot } from 'recoil';

function ShoppingCartApp() {
  return (
    <div>
      <RecoilRoot>
        <Header />
        <Outlet />
      </RecoilRoot>
    </div>
  );
}

export default ShoppingCartApp;