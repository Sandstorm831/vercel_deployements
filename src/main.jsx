import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
// import './index.css';
import LearningReactApp from './pages/learning_react/index.jsx'
import Game from './pages/TicTacToeGame/App.jsx'
import WeatherApp from './components/weather_app_components/weather/index.jsx'
import RecipeApp from './pages/RecipeApp/App.jsx';
import RecipeAppHome from './pages/RecipeApp/home/index.jsx';
import RecipeAppFavourites from './pages/RecipeApp/favourites/favourites.jsx';
import RecipeAppDetails from './pages/RecipeApp/details/details.jsx';
import ShoppingCartApp from './pages/shoppingCart/App.jsx';
import ShoppingCartHome from './pages/shoppingCart/home.jsx';
import ShoppingCartCart from './pages/shoppingCart/cart.jsx';
import ToDoApp from './pages/ToDoApp/App.jsx';
import CoalitionApp from './pages/coalitionProject/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/learningReact' element={<LearningReactApp />} />
        <Route path='/tictactoe' element={<Game />} />
        <Route path='/weatherapp' element={<WeatherApp />} />
        <Route path='/recipeapp' element={<RecipeApp />} >
          <Route index element={<RecipeAppHome />} />
          <Route path='favourites' element={<RecipeAppFavourites />} />
          <Route path='recipe-item/:id' element={<RecipeAppDetails />} /> 
        </Route>
        <Route path='/shoppingcart' element={<ShoppingCartApp />} >
          <Route index element={<ShoppingCartHome />} />
          <Route path='cart' element={<ShoppingCartCart />} />
        </Route>
        <Route path='/todoapp' element={<ToDoApp />} />
        <Route path='/coalitionproject' element={<CoalitionApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
