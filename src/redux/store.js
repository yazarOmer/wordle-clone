import { configureStore } from "@reduxjs/toolkit";
import wordleReducer from "../redux/wordle/wordleSlice";

export const store = configureStore({
    reducer: {
        wordle: wordleReducer,
    },
});
