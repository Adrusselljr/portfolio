import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactMe from './pages/ContactMe';
import Main from './pages/Main'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='contact' element={ <ContactMe /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App