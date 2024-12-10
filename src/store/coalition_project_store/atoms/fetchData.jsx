import { atom, selector } from "recoil";

let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

export const completeData = atom({
    key: "dataObject",
    default: selector({
        key: "dataObjectSelector",
        get: async () => {
            const response = await fetch("http://fedskillstest.coalitiontechnologies.workers.dev", {
                headers:{
                    'Authorization': `Basic ${auth}`
                }
            });
            const data = await response.json();
            return data;
        }
    })
})


export const line_data = selector({
    key: "lineDataKey",
    get: async ({get})=> {
        const Data = await get(completeData)
        const systolic_data = [];
        const diastolic_data = [];
        for(let i=5; i>=0; i--){
            systolic_data.push(Data[3].diagnosis_history[i].blood_pressure.systolic.value);
            diastolic_data.push(Data[3].diagnosis_history[i].blood_pressure.diastolic.value);
        }
        return {
            systolic_data,
            diastolic_data
        }
    }
})
