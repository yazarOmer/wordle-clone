import { createSlice } from "@reduxjs/toolkit";
import { WORDS } from "../../wordList";

const initialState = {
    guesses: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ],
    inCorrectLetters: [[], [], [], [], [], []],
    correctLetters: [[], [], [], [], [], []],
    wrongPosLetters: [[], [], [], [], [], []],
    currentGuess: 0,
    letterIndex: 0,
    word: "",
    isWon: false,
    isLost: false,
    openModal: false,
};

export const wordleSlice = createSlice({
    name: "wordle",
    initialState,
    reducers: {
        getWord: (state) => {
            state.word = WORDS[Math.round(Math.random() * WORDS.length)];
        },
        pressEnter: (state) => {
            if (WORDS.includes(state.guesses[state.currentGuess].join(""))) {
                state.guesses[state.currentGuess].map((letter, i) => {
                    if (letter === state.word.charAt(i)) {
                        state.correctLetters[state.currentGuess].push([
                            letter,
                            i,
                        ]);
                    } else if (
                        state.word.includes(letter) &&
                        letter !== state.word.charAt(i)
                    ) {
                        state.wrongPosLetters[state.currentGuess].push([
                            letter,
                            i,
                        ]);
                    } else {
                        state.inCorrectLetters[state.currentGuess].push([
                            letter,
                            i,
                        ]);
                    }
                });

                if (state.guesses[state.currentGuess].join("") === state.word) {
                    state.isWon = true;
                    state.openModal = true;
                } else if (state.currentGuess === 5) {
                    state.isLost = true;
                    state.openModal = true;
                } else {
                    state.currentGuess += 1;
                    state.letterIndex = 0;
                }
            }
        },
        pressBackspace: (state) => {
            if (state.letterIndex !== 0) {
                state.guesses[state.currentGuess][state.letterIndex - 1] = "";
                state.letterIndex -= 1;
            }
        },
        pressLetter: (state, action) => {
            if (state.letterIndex < 5) {
                state.guesses[state.currentGuess][state.letterIndex] =
                    action.payload;
                state.letterIndex += 1;
            }
        },
        toggleModal: (state) => {
            state.openModal = !state.openModal;
        },
        resetGame: (state) => {
            state.word = WORDS[Math.round(Math.random() * WORDS.length)];
            state.guesses = [
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
            ];
            state.inCorrectLetters = [[], [], [], [], [], []];
            state.correctLetters = [[], [], [], [], [], []];
            state.wrongPosLetters = [[], [], [], [], [], []];
            state.currentGuess = 0;
            state.letterIndex = 0;
            state.isWon = false;
            state.isLost = false;
            state.openModal = false;
        },
    },
});

export const {
    getWord,
    pressEnter,
    pressBackspace,
    pressLetter,
    resetGame,
    toggleModal,
} = wordleSlice.actions;
export default wordleSlice.reducer;
