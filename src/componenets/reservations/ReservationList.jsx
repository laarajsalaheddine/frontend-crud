import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../ReservationList.css'
import { Link, useParams } from "react-router-dom";

export default function () {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        // function fetchData() {
        //     fetch('http://localhost:8000/reservations')
        //         .then((response) => response.json())
        //         .then((data) => setData(data))
        //         .catch((error) => {
        //             console.clear()
        //             console.error('Error fetching data:', error)
        //         });

        //     // async / await (try catch)
        // }

        // fetchData();

        // const getData = async () => {
        //     try {
        //         const response = await fetch("http://localhost:8000/reservations");

        //         if (response.ok) {
        //             const data = await response.json();
        //             setData(data);
        //             console.log(data);
        //         }else
        //             throw new Error("Erreur HTTP");

        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        // getData();

        async function getData() {
            try {
                const response = await axios.get("http://localhost:8000/reservations");
                let newData = response.data;
                setData(newData);
            } catch (error) {
                console.error(error);
            }
        }
        getData();

        return () => {
            console.log("Cleanup if needed");
        }
    }, [])

    // cycle de vie: Montage => Mise à jour => Démontage
    const deleteObject = (targetId = null) => {
        let confirmation = confirm("Voulez-vous vraiment supprimer cette réservation ?")
        if (confirmation && targetId) {
            console.log("ID delete:", typeof targetId + " => " + targetId);
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
        }
    }


    return (
        <>
            <div className="reservation-list">
                <div>
                    <Link to="/add-reservation">Ajouter</Link>
                </div>
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