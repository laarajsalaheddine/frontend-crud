import { useState, useEffect } from 'react'
import '../ReservationList.css'
import { Link, useParams } from "react-router-dom";

export default function () {
    const [data, setData] = useState([])
    useEffect(() => {
        function fetchData() {
            fetch('http://localhost:3001/reservations')
                .then((response) => response.json())
                .then((data) => setData(data))
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

    return (
        <>
            <div className="reservation-list">
                {
                    data.map(
                        (element) => {
                            return (
                                <div key={"lskjfd" + element.id} className="reservation-item">
                                    <h3>Nom Complet: {element.fullName}</h3>
                                    <div>
                                        <p>Télé:  {element.phone}</p>
                                        <p>invités:  {element.guests}</p>
                                        <p>date:  {element.date}</p>
                                        <p>heure:  {element.time}</p>
                                        <p>notes:  {element.notes}</p>
                                    </div>
                                    <div>
                                        <Link to={`/edit-reservation/${element.id}`}>Éditer</Link>
                                        <Link to={`/delete/${element.id}`}>Supprimer</Link>
                                    </div>
                                </div>
                            );
                        }
                    )
                }
            </div>
        </>
    );
}