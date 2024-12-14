import React from "react";
import { useSelector } from "react-redux";
import "../forms/MostrarReservas.css"

const MostrarReservas = () => {
    const reservas = useSelector((state) => state.reservas.reservas); // Acceder a las reservas

    return (
        <div className="reservas-container">
            <h2>Reservas Registradas</h2>
            {reservas.length === 0 ? (
                <p className="no-reservas">No hay reservas registradas.</p>
            ) : (
                <table className="reservas-tabla">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Fecha Reserva</th>
                            <th>Hora Reserva</th>
                            <th>Tipo Cancha</th>
                            <th>¿Equipamiento?</th>
                            <th>Detalles Equipamiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{reserva.nombre}</td>
                                <td>{reserva.apellido}</td>
                                <td>{reserva.fechaReserva}</td>
                                <td>{reserva.horaReserva}</td>
                                <td>{reserva.tipoCancha}</td>
                                <td>{reserva.necesitaEquipamiento ? "Sí" : "No"}</td>
                                <td>{reserva.detallesEquipamiento || "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MostrarReservas;