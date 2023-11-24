import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { resetGame, toggleModal } from "../redux/wordle/wordleSlice";

const Modal = ({ text, correctWord }) => {
    const dispatch = useDispatch();

    return (
        <div className="w-screen h-screen bg-black/50 absolute inset-0 flex items-center justify-center">
            <div className="bg-[#121213] p-10 rounded-sm">
                <IoMdClose
                    size={24}
                    onClick={() => dispatch(toggleModal())}
                    className="rounded-full border text-white hover:bg-slate-50 hover:text-black transition p-1 relative ml-auto"
                />
                <p className="text-white font-semibold text-lg mt-5">{text}</p>
                {correctWord ? (
                    <p className="text-white text-[14px] my-2">
                        Doğru kelime: {correctWord}
                    </p>
                ) : (
                    ""
                )}
                <button
                    onClick={() => dispatch(resetGame())}
                    className="bg-[#538d4e] w-full py-1 px-2 rounded mt-3 text-white font-semibold"
                >
                    Tekrar Oyna
                </button>
            </div>
        </div>
    );
};

export default Modal;
