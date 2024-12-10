import { useRecoilValue } from "recoil"
import "../../../output.css"
import { completeData } from "../../../store/coalition_project_store/atoms/fetchData"
export default function DiagnosticList(){
    const Data = useRecoilValue(completeData);
    return <div className="flex flex-col bg-white my-5 rounded-2xl p-5 ">
        <div className="text-3xl font-bold mb-10"> Diagnostic List</div>
        <div className="flex bg-[#F6F7F8] rounded-full p-2 mb-2">
            <div className="text-lg w-80 font-bold text-[#072635]">Problem/Diagnosis</div>
            <div className="text-lg font-bold w-[556px] text-[#072635] ">Description</div>
            <div className="text-lg font-bold text-[#072635] w-24">Status</div>
        </div>
        <div className="overflow-scroll p-2 h-48">
            {
                Data[3].diagnostic_list.map((obj, idx) => {
                    return <ListItems problem={obj.name} description={obj.description} status={obj.status} />
                })
            }
        </div>

    </div>
}

function ListItems({problem, description, status}){
    return <div className="flex border-b border-b-[#F6F7F8] py-4">
        <div className="w-80">{problem}</div>
        <div className="w-[556px] ">{description}</div>
        <div className="w-24" >{status}</div>
    </div>
}