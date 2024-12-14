// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import reservasReducer from "./reservasSlice";

export const store = configureStore({
    reducer: {
        reservas: reservasReducer, // Agregar el slice de reservas
    },
});
