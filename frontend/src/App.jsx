import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import ShowBook from './pages/ShowBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import EditBook from './pages/EditBook.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home key={window.location.pathname} />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
    </Routes>
  )
}

export default App
