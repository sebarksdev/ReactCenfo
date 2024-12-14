// src/redux/reservasSlice.js
import { createSlice } from "@reduxjs/toolkit";

const reservasSlice = createSlice({
    name: "reservas",
    initialState: {
        reservas: [], // Lista de reservas
    },
    reducers: {
        agregarReserva: (state, action) => {
            state.reservas.push(action.payload); // Agregar nueva reserva
        },
        cargarReservas: (state, action) => {
            state.reservas = action.payload; // Cargar reservas iniciales
        },
    },
});

// Exportar acciones y reducer
export const { agregarReserva, cargarReservas } = reservasSlice.actions;
export default reservasSlice.reducer;
