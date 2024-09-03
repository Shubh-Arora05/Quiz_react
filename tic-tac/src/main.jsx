import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom' ;
import Border from './Components/Border.jsx';
import { ThemeProvider } from './Context/Context.jsx';
const router = createBrowserRouter([
  {path:'/' , element:<App></App>},
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
 < RouterProvider router = {router} />
 </ThemeProvider>
   
  </StrictMode>,
)
