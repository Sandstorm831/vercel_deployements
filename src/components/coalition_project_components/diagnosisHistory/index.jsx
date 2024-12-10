// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useRecoilValue } from 'recoil';
import { completeData, line_data } from '../../../store/coalition_project_store/atoms/fetchData';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidCircle } from "react-icons/bi";
import { WiDegrees } from "react-icons/wi";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    // Data for the chart
    const lineData = useRecoilValue(line_data)
    const data = {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [
            {
                label: 'Systolic',
                data: lineData["systolic_data"],
                fill: false,
                borderColor: 'rgba(230, 111, 210, 1)',
                tension: 0.4, // Adjust for curve
                cubicInterpolationMode: 'monotone',
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBorderColor: 'rgba(255,255,255,1)',
                pointBorderWidth: 1,
                pointBackgroundColor: 'rgba(230, 111, 210, 1)',
                borderWidth: 3
            },
            {
                label: 'Diastolic',
                data: lineData["diastolic_data"],
                fill: false,
                borderColor: 'rgba(140,111, 230, 1)',
                tension: 0.4, 
                cubicInterpolationMode: 'monotone',
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius:8,
                pointBorderColor: 'rgba(255,255,255,1)',
                pointBorderWidth: 1,
                pointBackgroundColor: 'rgba(140,111, 230, 1)',
                borderWidth: 3
            }
        ]
    };

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false // Start the y-axis at zero
            }
        }
    };

    return (
            <Line data={data} options={options} />
    );
};

export default function DiagnosisHistory(){
    const Data = useRecoilValue(completeData)

    return <div className='flex flex-col h-full bg-white rounded-xl p-5'>
        <div className='font-bold text-3xl my-2'>Diagnosis History</div>
        <div className='flex bg-[#F4F0FE] rounded-lg p-4 h-[300px] my-4'>
            <div className='flex flex-col w-[500px] h-[250px] '>
                <div className='flex justify-between'>
                    <div className='font-bold text-md'>Blood Pressure</div>
                    <button className='flex text-[#072635] text-sm'> <div className='flex flex-col justify-center'>Last 6 months</div> <div className='flex flex-col justify-center'><RiArrowDropDownLine className='text-[#072635] text-2xl font-thin' /></div></button>
                </div>
                <div className=' h-full w-full position-relative'><LineChart /></div>
            </div>
            <div className='flex flex-col px-5 '>
                <div className='flex flex-col justify-center border-b-2 border-b-[#CBC8D4] pb-2'>
                    <div className='text-[#072635] flex py-1 text-[#072635]'><div className='flex flex-col justify-center'><BiSolidCircle className='text-[#E66FD2]'/></div> <div className='flex flex-col justify-center p-1 font-bold'>Systolic</div></div>
                    <div className='text-3xl font-bold'>{Data[3].diagnosis_history[0].blood_pressure.systolic.value}</div>
                    <div className='flex'><div className='flex flex-col justify-center' >< TiArrowSortedUp /> </div> <div className='flex flex-col justify-center'>{Data[3].diagnosis_history[0].blood_pressure.systolic.levels}</div></div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-[#072635] flex'><div className='flex flex-col justify-center'><BiSolidCircle className='text-[#8C6FE6]'/></div> <div className='flex flex-col justify-center p-1 font-bold'> Diastolic</div></div>
                    <div className='text-3xl font-bold py-1 text-[#072635]'>{Data[3].diagnosis_history[0].blood_pressure.diastolic.value}</div>
                    <div className='flex'><div className='flex flex-col justify-center' >< TiArrowSortedDown /> </div> <div className='flex flex-col justify-center'>{Data[3].diagnosis_history[0].blood_pressure.diastolic.levels}</div></div>
                </div>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col bg-[#E0F3FA] rounded-lg w-full h-[300px] p-5 mr-5'>
                <div className='h-max flex '><div className='w-max'><img src='/static/images/respiratory rate.svg' alt='lung pic' height={150} width={150}/></div></div>
                <div className='text-xl'>Respiratory Rate</div>
                <div className='text-5xl font-bold pb-5'>{Data[3].diagnosis_history[0].respiratory_rate.value} bpm</div>
                <div className='text-xl'>{Data[3].diagnosis_history[0].respiratory_rate.levels}</div>
            </div>
            <div className='flex flex-col w-full p-5 bg-[#FFE6E9] rounded-lg  h-[300px] p-5 mr-5'>
            <div className='h-max flex '><div className='w-max'><img src='/static/images/temperature.svg' alt="thermometer picture"  height={150} width={150}/></div></div>
                <div className='text-xl'>Temperature</div>
                <div className='text-5xl font-bold pb-5'>{Data[3].diagnosis_history[0].temperature.value}°F</div>
                <div className='text-xl'>{Data[3].diagnosis_history[0].temperature.levels}</div>
            </div>
            <div className='flex flex-col bg-[#FFE6F1] rounded-lg w-full h-[300px] p-5 '>
            <div className='h-max flex '><div className='w-max'><img src='/static/images/HeartBPM.svg' alt="heart bp pic" height={150} width={150}/></div></div>
                <div className='text-xl'>Heart Rate</div>
                <div className='text-5xl font-bold pb-5'>{Data[3].diagnosis_history[0].heart_rate.value} bpm </div>
                <div className='text-xl flex'><div className='flex flex-col justify-center'>< TiArrowSortedDown /> </div> <div className='flex flex-col justify-center'>{Data[3].diagnosis_history[0].heart_rate.levels}</div></div>
            </div>
        </div>
    </div>
}

