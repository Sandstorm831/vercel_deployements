import { useRecoilValue } from "recoil"
import "../../../output.css"
import { completeData } from "../../../store/coalition_project_store/atoms/fetchData"
import { BsDownload } from "react-icons/bs";

export default function LabResults(){
    const Data = useRecoilValue(completeData);
    return <div className="bg-white p-5 flex flex-col mt-5 rounded-xl h-72 mb-2">
        <div className="font-bold text-2xl text-[#072635] flex">Lab Results</div>
        <div className="overflow-scroll ">
            {
                Data[3].lab_results.map((obj, idx) => {
                    return <Entyr name={obj} idx={idx}/>
                })
            }
        </div>
    </div>
}

function Entyr({name, idx}){
    if (idx === 2){
        return <div className="flex justify-between p-2 bg-[#F6F7F8]m-1">
            <div className="flex flex-coll justify-center">{name}</div>
            <div className="flex flex-col justify-center"><BsDownload className="font-bold text-lg" /> </div> 
        </div>
    }
    return <div className="flex justify-between p-2 m-1">
        <div className="flex flex-coll justify-center">{name}</div>
        <div className="flex flex-col justify-center"><BsDownload className="font-bold text-lg" /> </div> 
    </div>
}