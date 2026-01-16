import { useState, useEffect } from 'react'
import '../ReservationList.css'
import { Link, useParams, useNavigate } from "react-router-dom";

export default function () {
    const [data, setData] = useState([])
    const { id } = useParams()
    const redirectMe = useNavigate();

    useEffect(() => {
        function fetchData() {
            fetch('http://localhost:8000/reservations')
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => {
                    console.clear()
                    console.error('Error fetching data:', error)
                });

            // async / await (try catch)
        }

        fetchData();

        return () => {
            console.log("Cleanup if needed");
        }
    }, [])

    // cycle de vie: Montage => Mise à jour => Démontage
    const deleteObject = (targetId = null) => {
        // let confirmation = confirm("Voulez-vous vraiment supprimer cette réservation ?")
        // if (confirmation && targetId) {
        // console.log("ID delete:", typeof targetId + " => " + targetId);
        function deleteData() {
            fetch(`http://localhost:8000/reservations/${targetId}`, {
                method: 'DELETE' // verbe HTTP
            })
                .then((response) => response.json())
                .then((dataAfterDelete) => {
                    setData(
                        data.filter(
                            (element) => {
                                return element.id != targetId
                            }
                        )
                    )
                })
                .catch((error) => {
                    console.clear()
                    console.error('Error de suppression:', error)
                });
        }

        deleteData();
        // }
    }


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
                                        <button onClick={() =>
                                            deleteObject(element.id)
                                        }>Supprimer</button>
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