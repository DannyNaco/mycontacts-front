
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";

const Login = () => {
    
    const [email, setEmail] = useState(""); //useState permet de gérer automatiquement les valeurs de la constante : ici on initialise email avec une chaîne vide, et setEmail est une fonction qui permet de mettre à jour la valeur de email automatiquement quand elle est appelée.
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 
    
 

    async function handleSubmit(e){ // fonction asynchrone : donc elle peut utiliser le mot-clé await pour attendre la résolution de ces opérations avant de continuer l'exécution du code.
        e.preventDefault();
        setError("");
        try {
        const { data } = await http.post("/auth/login", { email, password });
        if (data?.token) {
            localStorage.setItem("token", data.token);
            navigate("/contacts");
            
            window.location.reload();
        } else {
            const msg = data?.message || data.error || "Erreur d'authentification.";
            setError(msg);
        }
        } catch (err) {
        const msg = err?.response?.data?.error ||  "Erreur d'authentification.";
        setError(msg);
        }
    } 


    return (
        <div>
            <h2>Connectez vous !</h2>
            {error && <p style={{ color: "crimson" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <h2>Connexion</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
                <button type="submit" className='btn-jaune'>Se connecter</button>
            </form>
        </div>
    );
}

export default Login;