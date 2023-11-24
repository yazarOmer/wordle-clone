import React from "react";
import { useSelector } from "react-redux";

const Guess = ({
    guess,
    guessOrder,
    inCorrectLetters,
    correctLetters,
    wrongPosLetters,
}) => {
    const { currentGuess, isWon } = useSelector((state) => state.wordle);

    return (
        <div className="flex gap-1">
            {guess.map((letter, key) => (
                <div
                    key={key}
                    className={`w-[62px] h-[62px] uppercase text-[#f8f8f8] text-[2rem] font-bold select-none mb-1 flex items-center justify-center border-2 ${
                        letter !== "" ? "animate-pop" : ""
                    }  ${letter ? "border-[#565758]" : "border-[#3a3a3c]"}  ${
                        (correctLetters[guessOrder]?.some(
                            (arr) => arr[0] == letter
                        ) &&
                            correctLetters[guessOrder]?.some(
                                (arr) => arr[1] == key
                            ) &&
                            guessOrder < currentGuess) ||
                        (isWon && currentGuess == guessOrder)
                            ? "bg-[#538d4e] border-none"
                            : inCorrectLetters[guessOrder]?.some(
                                  (arr) => arr[0] == letter
                              ) &&
                              inCorrectLetters[guessOrder]?.some(
                                  (arr) => arr[1] == key
                              ) &&
                              guessOrder < currentGuess
                            ? "bg-[#3a3a3c] border-none"
                            : wrongPosLetters[guessOrder]?.some(
                                  (arr) => arr[0] == letter
                              ) &&
                              wrongPosLetters[guessOrder]?.some(
                                  (arr) => arr[1] == key
                              ) &&
                              guessOrder < currentGuess
                            ? "bg-[#b59f3b] border-none"
                            : ""
                    }`}
                >
                    {guess[key]}
                </div>
            ))}
        </div>
    );
};

export default Guess;
