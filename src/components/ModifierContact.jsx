
import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPrive, patchPrive } from "../api/reqApiService";

const ModifierContact = () => {

    const { id } = useParams();  
    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", anneeNaissance: ""});
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
        async function fetchContact() {
            try {
                const data = await getPrive(`/contacts/${id}`);
                setForm({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    anneeNaissance: data.anneeNaissance 
                });
            } catch (err) {
                const msg = err?.response?.data?.error || "Erreur lors du chargement du contact.";
                setError(msg);
            }
        }
        fetchContact();
    }, [id]);

    async function handleSave(e) {

        e.preventDefault();
        setError("");

        try {
            const data = await patchPrive(`/contacts/${id}`, form);
              navigate("/contacts");
        } catch (err) {
        const msg = err?.response?.data?.error || "Erreur lors de la modification du contact.";
        setError(msg);
        }
        
        
      
    
    }

      return (

        <div>
            <button onClick={() => navigate("/contacts")}>Retour</button>
    <form onSubmit={handleSave}>
        <h2>Modifier le contact</h2>
        {error && <p style={{ color: "crimson" }}>{error}</p>}

    <label>Prénom
        <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
    </label>

    <label>Nom
        <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
    </label>

    <label>Téléphone
        <input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
    </label>

    <label>Année de naissance
        <input type="number" value={form.anneeNaissance} onChange={(e) => setForm({ ...form, anneeNaissance: e.target.value })} />
    </label>

      <button type="submit">Sauvegarder</button>
    </form>
    </div>
  );

}

export default ModifierContact;