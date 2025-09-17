
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPublic } from "../api/reqApiService";

const Register = () => {

    const [nomPrenom, setNomPrenom] = useState("");
    const [email, setEmail] = useState(""); //useState permet de gérer automatiquement les valeurs de la constante : ici on initialise email avec une chaîne vide, et setEmail est une fonction qui permet de mettre à jour la valeur de email automatiquement quand elle est appelée.
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 


         // fonction asynchrone : donc elle peut utiliser le mot-clé await pour attendre la résolution de ces opérations avant de continuer l'exécution du code.
    async function handleSubmit(e){  //le e c'est l'événement de soumission du formulaire

        e.preventDefault();
        setError("");
        try {
        const data = await postPublic("/auth/register", {nomprenom:nomPrenom,email: email, password: password });
        navigate("/login");
        } catch (err) {
      const msg = err?.response?.data?.error || "Erreur d'inscription.";
      setError(msg);
    }
    } 


    return (
       <div>
      <h2>Inscription</h2>
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <form onSubmit={handleSubmit}>

         <label>
          NomPrenom
          <input
            type="text" value={nomPrenom} onChange={(e) => setNomPrenom(e.target.value)} placeholder="Votre nom et prénom" />
        </label>

        <label>
          Email
          <input
            type="email" required 
            value={email} // la valeur de l'input est liée à la constante email
            onChange={(e) => setEmail(e.target.value)} // à chaque changement de l'input, on met à jour la valeur de email avec setEmail
            placeholder="votre@email.com" />
        </label>

        <label>
          Mot de passe
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
    );
}

export default Register;