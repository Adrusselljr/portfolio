import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactMe from './pages/ContactMe'
import Main from './pages/Main'
import Success from './pages/Success'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='contact' element={ <ContactMe /> } />
                <Route path='success' element={ <Success /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App