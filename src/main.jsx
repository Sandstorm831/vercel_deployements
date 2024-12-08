import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import './index.css';
import LearningReactApp from './pages/learning_react/index.jsx'
import Game from './pages/TicTacToeGame/App.jsx'
import WeatherApp from './components/weather_app_components/weather/index.jsx'
import RecipeApp from './pages/RecipeApp/App.jsx';
import Home from './pages/RecipeApp/home/index.jsx';
import Favourites from './pages/RecipeApp/favourites/favourites.jsx';
import Details from './pages/RecipeApp/details/details.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/learningReact' element={<LearningReactApp />} />
        <Route path='/tictactoe' element={<Game />} />
        <Route path='/weatherapp' element={<WeatherApp />} />
        <Route path='/recipeapp' element={<RecipeApp />} >
          <Route index element={<Home />} />
          <Route path='favourites' element={<Favourites />} />
          <Route path='recipe-item/:id' element={<Details />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
