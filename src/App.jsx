import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Header from './components/Header';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contacts from "./pages/Contacts";
import ProtectedRoute from './components/ProtectedRoute';
import AjouterContact from './components/AjouterContact';
import ModifierContact from './components/ModifierContact';
import SupprimerContact from './components/SupprimerContact';


function App() {



  return (<div className="App">
    <Header />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/creer" element={<AjouterContact />} />
          <Route path="/contacts/:id/modifier" element={<ModifierContact />} />
          <Route path="/contacts/:id/supprimer" element={<SupprimerContact />} />
        </Route>
      </Routes>
    </main>
  </div>
  ) 
}

export default App
