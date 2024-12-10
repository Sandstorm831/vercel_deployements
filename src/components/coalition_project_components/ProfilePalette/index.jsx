import "../../../output.css"
import { useRecoilValue } from "recoil"
import { completeData } from "../../../store/coalition_project_store/atoms/fetchData"
import { CiCalendar } from "react-icons/ci";
import { IoMdFemale } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";

export default function ProfilePalette(){
    const Data = useRecoilValue(completeData);
    const dob = new Date(Data[3].date_of_birth);
    const options =  { day: 'numeric', month: 'long', year: 'numeric' };

    const LocalDate = dob.toLocaleDateString('en-US', options);
    return <div className="flex flex-col bg-white rounded-xl p-5">
        <div className="flex justify-center pt-5"> <img src={Data[3].profile_picture}  alt="patient picture" width={220} height={220} /> </div>
        <div className="text-2xl font-bold flex justify-center mt-7 mb-7">{Data[3].name}</div>
        <div className="flex w-full mb-5">
            <div className="rounded-full bg-[#F6F7F8] flex mr-4"><CiCalendar className="text-3xl m-2" /></div>
            <div className="flex flex-col">
                <div >Date of birth</div>
                <div className="font-bold">{LocalDate}</div>
            </div>
        </div>
        <div className="flex w-full mb-5">
            <div className="rounded-full bg-[#F6F7F8] flex mr-4"><IoMdFemale className="text-3xl m-2" /></div>
            <div className="flex flex-col">
                <div>Gender</div>
                <div className="font-bold">{Data[3].gender}</div>
            </div>
        </div>
        <div className="flex w-full mb-5">
            <div className="rounded-full bg-[#F6F7F8] flex mr-4"><MdOutlineLocalPhone className="text-3xl m-2" /></div>
            <div className="flex flex-col">
                <div>Contact Info.</div>
                <div className="font-bold">{Data[3].phone_number}</div>
            </div>
        </div>
        <div className="flex w-full mb-5">
            <div className="rounded-full bg-[#F6F7F8] flex mr-4"><MdOutlineLocalPhone className="text-3xl m-2" /></div>
            <div className="flex flex-col">
                <div>Emergency Contacts</div>
                <div className="font-bold">{Data[3].emergency_contact}</div>
            </div>
        </div>
        <div className="flex w-full mb-5">
            <div className="rounded-full bg-[#F6F7F8] flex mr-4"><LuShieldCheck className="text-3xl m-2" /></div>
            <div className="flex flex-col">
                <div>Insurance Provider</div>
                <div className="font-bold">{Data[3].insurance_type}</div>
            </div>
        </div>
        <button className="flex justify-center m-5"><div className="bg-[#01F0D0] rounded-full w-48 py-2">Show All Information</div></button>
    </div>
}