import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHABLE_KEY){
    throw new Error('Missing Publishable key')
}

createRoot(document.getElementById('root')).render(
    <ClerkProvider>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </ClerkProvider>
    
)