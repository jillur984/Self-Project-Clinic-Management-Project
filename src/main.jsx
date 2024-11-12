import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider.jsx'
import SignupInfoProvider from './Providers/SignupInfoProvider.jsx'
import MembersProvider from './Providers/MembersProvider.jsx'
import DoctorsProvider from './Providers/DoctorsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DoctorsProvider>
    <MembersProvider>
    <SignupInfoProvider>
    <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
    </SignupInfoProvider>
    </MembersProvider>
    </DoctorsProvider>
  </StrictMode>,
)
