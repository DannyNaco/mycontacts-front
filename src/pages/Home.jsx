import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Bienvenue sur MyContacts !</h1>
            <p>Gérez vos contacts facilement et rapidement.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><p>Jetez un oeil a vos</p><Link to="/contacts" className='bouton' style={{ color: "black" , backgroundColor: "#ffcf01"}}>Contacts</Link></div>    
        </div>
    );
}