import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../ReservationForm.css'

export default function ReservationFormUpdate() {
    const { id } = useParams();
    const formDataRef = useRef(null);
    const redirectMe = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState(
        {
            fullName: "",
            phone: "",
            guests: 1,
            date: "",
            time: "",
            notes: ""
        }
    );
    // recapitulatif des informations
    /*
        form (ui) ==> formData (varaiable d'etat) ==> usRef.hook.current (useRef => mutable) ==> POST fetch ==> backend
    */

    useEffect(() => {
        function fetchData() {
            fetch(`http://localhost:8000/reservations/${id}`) // Par default la methode est GET
                .then((response) => response.json())
                .then((data) => {
                    setFormData(data);
                })
                .catch((error) => {
                    console.clear()
                    console.error('Error fetching data:', error)
                });
        }
        fetchData();

        return () => {
            console.log("Cleanup if needed");
        }
    }, [])

    useEffect(() => {
        if (!isSubmitted) return;
        // if (!formDataRef.current) return;
        function updateObject() {
            // uri
            // endpoint = URI + resource (dans ce cas "post")
            fetch(`http://localhost:8000/reservations/${id}`,
                {
                    method: 'PUT', // verbe HTTP (put/patch/update/post)
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataRef.current)
                }
            ).then((response) => response.json())
                .then((data) => {
                    //setFormData(data)
                })
                .catch((error) => {
                    console.clear()
                    console.error('Error Posting data:', error)
                }).finally(() => {
                    // IMPORTANT : rem ettre isSubmitted à false pour permettre le prochain submit
                    setIsSubmitted(false);
                    redirectMe("/");
                });
        }
        updateObject();

        console.log("sendiiing !!! ?");
        return () => {
            console.log("Cleanup if needed");
        }
    }, [isSubmitted])

    const handleSubmit = (event) => {
        event.preventDefault();
        formDataRef.current = {
            ...formData
        };
        setIsSubmitted(true);
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData(
            { ...formData, [name]: value }
        );
    }

    return (
        <div className="reservation-form-container">
            <h2>Ajouter une Reservation</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Nom complet"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="guests"
                    placeholder="Nombre de personnes"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
                <button type="submit">Réserver</button>
            </form>
        </div>
    );

}