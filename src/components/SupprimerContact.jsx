
import React from 'react';
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deletePrive} from "../api/reqApiService";

export default async function SupprimerContact() {

    const { id } = useParams();
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    async function handleDelete(e) {
        
        e.preventDefault();
        setError("");

        try {
            await deletePrive(`/contacts/${id}`);
            navigate("/contacts");
        } catch (err) {
            const msg = err?.response?.data?.error || "Erreur lors de la suppression du contact.";
            setError(msg);
        }
    }

    return (
        <div>
            <h2>Supprimer le contact</h2>
            {error && <p style={{ color: "crimson" }}>{error}</p>}
            <p>Êtes-vous sûr de vouloir supprimer ce contact ? Cette action est irréversible.</p>
            <button className='btn-rouge' onClick={handleDelete}>Supprimer</button>
            <button className='btn-bleu' onClick={() => navigate("/contacts")}>Annuler</button>
        </div>
    );

}
