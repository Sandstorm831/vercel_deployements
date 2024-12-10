import "../../../output.css"
import { IoMdSearch } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { completeData } from "../../../store/coalition_project_store/atoms/fetchData";
import { useRecoilValue } from "recoil";
import { Suspense } from "react";
export default function PatientsPalette() {
    const data = useRecoilValue(completeData);
    return <div className="flex flex-col h-[780px]"  >
        <div className="flex flex-row justify-between m-5">
            <div className="text-[#072635] font-bold text-2xl">Patients</div>
            <button><IoMdSearch className="text-3xl"/></button>
        </div>
        <div className="overflow-scroll h-full">
            {
                data.map((obj, idx) => {
                    return <Suspense >
                        <Data name={obj.name} gender={obj.gender} age={obj.age} profile_picture={obj.profile_picture} idx={idx} />
                        </Suspense>
                })
            }

        </div>
    </div>
}

function Data({name, gender, age, profile_picture, idx}){
    if(idx === 3){
        return <div className="flex justify-between w-full pl-5 h-20 pr-3 py-4 bg-[#D8FCF7]">
        <img src={profile_picture} />
        <div className="flex flex-col w-full justify-center mx-3">
            <div className="flex font-bold text-sm">{name}</div>
            <div className="flex font-light text-[#707070] text-sm">{gender}, {age}</div>
        </div>
        <button className="max-content">
            <BsThreeDots />
        </button>
    </div>
    }
    return <div className="flex justify-between w-full h-20 pl-5 pr-3 py-4">
        <img src={profile_picture}  />
        <div className="flex flex-col w-full justify-center mx-3">
            <div className="flex font-bold text-sm">{name}</div>
            <div className="flex font-light text-[#707070] text-sm">{gender}, {age}</div>
        </div>
        <button className="max-content">
            <BsThreeDots />
        </button>
    </div>

}