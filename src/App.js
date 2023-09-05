import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  const publicRoutes = [
    {
      path: '/',
      component : <Login/>
    },
    {
      path: '/home',
      component: <Home/>
    }
  ]

  return (
    <>
    <BrowserRouter>
    <Routes>
    {
      publicRoutes.map((route,key)=>
      {
        return  <Route key={key} path={route.path} element={route.component} /> 
      })}
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
