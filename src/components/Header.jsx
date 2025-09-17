import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    const isLoggedIn = !!localStorage.getItem("token");
   
    
    return (
        <header>
            <Link style={{ textDecoration: "none", color: "white", fontWeight: "bold" , fontSize: "55px", cursor: "pointer"}} to="/">MyContacts</Link>
            {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
        </header>
    );
} 

const LoggedOutNav = () => ( 
    <nav>
        <Link className='bouton btn-jaune' to="/login">Connexion</Link>
        <Link className='bouton btn-bleu' to="/register">Inscription</Link>
    </nav>
);

const LoggedInNav = () => {
    return (
            <nav>
                <Link to="/contacts"  className='bouton btn-jaune'>Contacts</Link>
                <button onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                }} className='btn-rouge'>Deconnexion</button>
            </nav>
    );
} 
export default Header;
