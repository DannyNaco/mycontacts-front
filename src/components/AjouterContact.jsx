
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPrive } from "../api/reqApiService";

const AjouterContact = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState(""); //useState permet de gérer automatiquement les valeurs de la constante : ici on initialise email avec une chaîne vide, et setEmail est une fonction qui permet de mettre à jour la valeur de email automatiquement quand elle est appelée.
    const [anneeNaissance, setAnneeNaissance] = useState(); //car on veut un nombre
    const [error, setError] = useState("");
    const navigate = useNavigate(); 


         // fonction asynchrone : donc elle peut utiliser le mot-clé await pour attendre la résolution de ces opérations avant de continuer l'exécution du code.
    async function handleSubmit(e){  //le e c'est l'événement de soumission du formulaire

        e.preventDefault();
        setError("");
        try {
        const data = await postPrive("/contacts", {firstName:firstName,lastName:lastName, phone: phone, anneeNaissance: anneeNaissance });
        navigate("/contacts");
        } catch (err) {
      const msg = err?.response?.data?.error || "Erreur d'inscription.";
      setError(msg);
    }
    } 


    return (
       <div>
        <button onClick={() => navigate("/contacts")}>Retour</button>
      <h2>Ajouter un contact</h2>
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <form onSubmit={handleSubmit}>

         <label>
          Prenom
          <input
            type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="prénom" />
        </label>

        <label>
          Nom
          <input
            type="text" required 
            value={lastName} // la valeur de l'input est liée à la constante lastName
            onChange={(e) => setLastName(e.target.value)} // à chaque changement de l'input, on met à jour la valeur de lastName avec setLastName
            placeholder="nom" />
        </label>

        <label>
          Téléphone
          <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='06XXXXXXXX' />
        </label>

        <label>
          Année de naissance
          <input type="number" required value={anneeNaissance} onChange={(e) => setAnneeNaissance(e.target.value)} placeholder='AAAA' />
        </label>

        <button type="submit">Créer le contact</button>
      </form>
    </div>
    );
}

export default AjouterContact;