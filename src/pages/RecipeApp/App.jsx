import './App.css';
import { Outlet} from "react-router-dom"
import Navbar from '../../components/recipe_app_components/navbar/index';
import "../../output.css"
import GlobalState from '../../context/recipe_app_context/index';

function RecipeApp() {
  return (
    <div>
      <GlobalState>
        <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
          <Navbar />
          <Outlet />
        </div>
      </GlobalState>
    </div>
  );
}

export default RecipeApp;
