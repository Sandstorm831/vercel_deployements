import { GoHome } from "react-icons/go";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdCard } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import "../../../output.css"
import { IoSettingsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
export default function Navbar(){
    return <div className="flex flex-row justify-between p-5  rounded-full bg-[#FFFFFF]">
        <div><img src="/static/images/TestLogo.svg" alt="Logo" /></div>
        <div className="flex flex-row justify-center">
            <button className="flex mx-5 text-lg rounded-full px-3"><div className="m-2 flex flex-col justify-center"><GoHome className="text-2xl "/></div> <div className="flex flex-col justify-center">Overview</div></button>
            <button className="flex mx-5 text-lg rounded-full px-3 bg-[#01F0D0]"><div className="m-2 flex flex-col justify-center"><MdOutlinePeopleAlt className="text-2xl" /> </div> <div className="flex flex-col justify-center"> Patients </div> </button>
            <button className="flex mx-5 text-lg rounded-full px-3"><div className="m-2 flex flex-col justify-center"><CiCalendar className="text-2xl" /> </div> <div className="flex flex-col justify-center"> Schedule</div></button>
            <button className="flex mx-5 text-lg rounded-full px-3"><div className="m-2 flex flex-col justify-center"><FiMessageSquare className="text-2xl" /> </div> <div className="flex flex-col justify-center"> Transactions</div></button>
            <button className="flex mx-5 text-lg rounded-full px-3"><div className="m-2 flex flex-col justify-center"><IoMdCard className="text-2xl" /> </div> <div className="flex flex-col justify-center"> Transactions</div></button>
        </div>
        <div className="flex flex-row justify-center">
            <img src="/static/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile picture of 1st object" />
            <div className="flex flex-col justify-center px-2 w-36">
                <div className="text-xs">Dr. Jose Simmons</div>
                <span className="text-xs">General Practitioner</span>
            </div>
            <button className="border-s-2 border-l-[#EDEDED] px-2"> <IoSettingsOutline className="text-2xl"/> </button>
            <button><TbDotsVertical className="text-2xl" /></button>
        </div>
    </div>
}