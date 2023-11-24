import { IoMenu } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
    return (
        <header className="flex items-center justify-start w-full h-[66px] px-5 border-b border-[#3a3a3c]">
            <div className="flex items-center w-[350px]">
                <button>
                    <IoMenu size={28} color="#fff" />
                </button>
            </div>
            <h1 className="text-3xl font-bold w-[600px] lg:w-[1180px] text-center text-[#f8f8f8]">
                Wordle
            </h1>
            <div className="flex items-center justify-end w-[350px]">
                <button className="px-[6px]">
                    <FaRegQuestionCircle size={28} color="#fff" />
                </button>
                <button className="px-[6px]">
                    <MdOutlineLeaderboard size={28} color="#fff" />
                </button>
                <button className="px-[6px]">
                    <IoMdSettings size={28} color="#fff" />
                </button>
                <button className="text-[#f8f8f8] text-[14px] ml-8 px-6 border flex items-center justify-center rounded-full min-h-[35px]">
                    Subscribe to Games
                </button>
            </div>
        </header>
    );
};

export default Header;
