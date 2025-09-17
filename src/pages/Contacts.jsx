import { useState, useEffect } from "react";
import { getPrive } from "../api/reqApiService";
import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    async function MesContacts() {
      try {
        const data = await getPrive("/contacts");
        setContacts(data);
      } catch (err) {
        const msg = err?.response?.data?.error || "Erreur lors du chargement des contacts.";
        setError(msg);
      }
    }

    MesContacts();
  }, []); 
// useEffect est un bail de React qui exécute des bails a chaque nouveau chargement du composant dans lequel il est. Il a deux arguments : une fonction et un tableau de dépendances. La fonction est exécutée après chaque chargement du composant, et le tableau de dépendances détermine quand il doit être réexécuté. Si le tableau est vide, il ne s'exécute qu'une seule fois, lors du chargement initial du composant.




  return ( 
    <div className="contacts-page">
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <h2>Mes contacts</h2>
        <button onClick={() => navigate("/contacts/creer")}>Ajouter un contact</button>
      <div style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
          {contacts.map((contact) => ( //map est le foreach de React : en gros il prend un tableau normal, et il le transforme en tableau de composants React, que jsx peut afficher.
            <div key={contact.id} style={{ display: "flex", flexDirection: "column", gap: "25px", backgroundColor: "#1a1a1a", borderRadius: "10px", padding: "20px"}}>
              <h3 style={{ margin: 0, color: "#ffcf01", fontSize: "16px", fontWeight: "bold", textTransform: "capitalize" }}>{contact.firstName} {contact.lastName}</h3>
              <div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold",  }}>
                  Téléphone : {contact.phone}
                </p>
                <p style={{ margin: 0, fontStyle: "italic", fontSize: "14px", fontWeight: "normal" }}>Année de naissance : {contact.anneeNaissance}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button className='btn-bleu' onClick={() => navigate(`/contacts/${contact.id}/modifier`)}>Modifier le contact</button>
              <button className='btn-rouge' onClick={() => navigate(`/contacts/${contact.id}/supprimer`)}>Supprimer le contact</button>
              </div>
            </div>
          ))}
      </div>
     
    </div>
  );
}
