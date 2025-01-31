import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import Authprovider from './provider/Authprovider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    </Authprovider>
    
  </StrictMode>,
)
