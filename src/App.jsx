/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Guess from "./components/Guess";
import { useDispatch, useSelector } from "react-redux";
import {
    getWord,
    pressBackspace,
    pressEnter,
    pressLetter,
    resetGame,
} from "./redux/wordle/wordleSlice";
import Modal from "./components/Modal";

function App() {
    const dispatch = useDispatch();

    const {
        guesses,
        inCorrectLetters,
        correctLetters,
        wrongPosLetters,
        currentGuess,
        word,
        isWon,
        isLost,
        openModal,
    } = useSelector((state) => state.wordle);

    useEffect(() => {
        dispatch(getWord());
    }, []);

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            dispatch(pressEnter());
        } else if (e.key === "Backspace") {
            dispatch(pressBackspace());
        } else if (
            guesses[currentGuess].join("").trim().length < 5 &&
            e.key.match(/[a-zA-ZçÇğĞıIiİöÖşŞüÜ]/)
        ) {
            dispatch(pressLetter(e.key.toLowerCase()));
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [handleKeyUp]);

    return (
        <div className="w-screen">
            <Header />
            <main className="w-full max-w-[600px] mx-auto my-0 h-[calc(100%-65px)] flex flex-col mt-5">
                <div className="flex flex-col items-center gap-0.5">
                    {guesses?.map((guess, key) => (
                        <Guess
                            guess={guess}
                            inCorrectLetters={inCorrectLetters}
                            correctLetters={correctLetters}
                            wrongPosLetters={wrongPosLetters}
                            guessOrder={key}
                            key={key}
                        />
                    ))}
                </div>

                {isWon && openModal && <Modal text="KAZANDIN !!!" />}
                {isLost && openModal && (
                    <Modal text="KAYBETTİN !!!" correctWord={word} />
                )}
                <br />

                <Keyboard />
            </main>
        </div>
    );
}

export default App;
