import { RecoilRoot } from "recoil"
import Navbar from "../../components/coalition_project_components/navbar/index"
import "../../output.css"
import PatientsPalette from "../../components/coalition_project_components/patients/index"
import DiagnosisHistory from "../../components/coalition_project_components/diagnosisHistory/index"
import DiagnosticList from "../../components/coalition_project_components/diagnosisList/index"
import ProfilePalette from "../../components/coalition_project_components/ProfilePalette/index"
import LabResults from "../../components/coalition_project_components/labResult/index"
function CoalitionApp() {

  return (
    <RecoilRoot>
      <div className="flex flex-col bg-[#F6F7F8] h-full">
        <div className="m-5">
          <Navbar />
        </div>
        <div className="flex justify-between">
          <div className="bg-white w-[367px] h-full rounded-xl mx-5"> <PatientsPalette /> </div>
          <div className="w-[1066px] mx-5 h-full flex flex-col overflow-scroll"> 
            <DiagnosisHistory /> 
            <DiagnosticList />
          </div>
          <div className="w-[367px] mx-5 "> 
            <ProfilePalette />
            <LabResults />
          </div>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default CoalitionApp
