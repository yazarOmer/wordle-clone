import React from "react";
import { IoBackspaceOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
    pressBackspace,
    pressEnter,
    pressLetter,
} from "../redux/wordle/wordleSlice";

const Keyboard = () => {
    const dispatch = useDispatch();

    const { guesses, currentGuess, inCorrectLetters, correctLetters } =
        useSelector((state) => state.wordle);

    const keys = [
        ["q", "w", "e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i"],
        ["Enter", "z", "x", "c", "v", "b", "n", "m", "ö", "ç", "Backspace"],
    ];

    let allCorrect = [
        ...correctLetters[0],
        ...correctLetters[1],
        ...correctLetters[2],
        ...correctLetters[3],
        ...correctLetters[4],
    ];

    let allInCorrect = [
        ...inCorrectLetters[0],
        ...inCorrectLetters[1],
        ...inCorrectLetters[2],
        ...inCorrectLetters[3],
        ...inCorrectLetters[4],
    ];

    const handlePressBtn = (key) => {
        if (key === "Enter") {
            dispatch(pressEnter());
        } else if (key === "Backspace") {
            dispatch(pressBackspace());
        } else if (guesses[currentGuess].join("").trim().length < 5) {
            dispatch(pressLetter(key.toLowerCase()));
        }
    };

    return (
        <div>
            {keys.map((row, index) => (
                <div
                    key={index}
                    className="flex gap-2 mb-2 flex-1 justify-center"
                >
                    {row.map((key, index) => (
                        <button
                            key={index}
                            onClick={() => handlePressBtn(key)}
                            className={` px-3 ${
                                key !== "Enter" && key !== "Backspace"
                                    ? "w-[43px]"
                                    : "w-[65px]"
                            } h-[58px] rounded flex items-center justify-center text-[#f8f8f8] font-bold ${
                                key === "Enter" ? "text-[14px]" : "text-[18px]"
                            } uppercase  ${
                                allCorrect.some((arr) => arr.includes(key))
                                    ? "bg-[#538d4e]"
                                    : allInCorrect.some((arr) =>
                                          arr.includes(key)
                                      )
                                    ? "bg-[#3a3a3c]"
                                    : "bg-[#818384]"
                            }`}
                        >
                            {key === "Backspace" ? (
                                <IoBackspaceOutline size={24} />
                            ) : (
                                key
                            )}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
