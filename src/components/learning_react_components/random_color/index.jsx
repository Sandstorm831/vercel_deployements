import { useState } from "react"
import '../../../output.css'

export default function RandomColor() {
    const[typeColor, setTypeColor] = useState('rgb');
    const[currColor, setCurrColor] = useState('rgb(70,30,00)');
    const hexDec = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
    };
    const Dechex = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6', 
        7: '7', 
        8: '8', 
        9: '9',
        10: 'A', 
        11: 'B',
        12: 'C', 
        13: 'D',
        14: 'E',
        15: 'F'
    };

    function hexToDecimal(hex){
        let stpower = hex.length - 1;
        let dec = 0;
        for(let j=0; j<hex.length; j++){
            dec += hexDec[hex[j]] * Math.pow(16, stpower);
            stpower -= 1;
        }
        return dec;
    }
    function decimalToHex(dec){
        dec = parseInt(dec);
        let hexrev = "";
        while(dec !== 0){
            let r = dec%16;
            hexrev += Dechex[r];
            dec = Math.floor(dec/16);
        }
        while(hexrev.length < 2){
            hexrev += '0'
        }
        let hex = hexrev.split('').reverse().join('');
        return hex;
    }
    function hexToRGB(hex){
        let r,g,b;
        r = hex[1]+hex[2]
        g = hex[3]+hex[4]
        b = hex[5]+hex[6]
        let r_dec = hexToDecimal(r);
        let g_dec = hexToDecimal(g);
        let b_dec = hexToDecimal(b);
        let rgb = "rgb(" + r_dec.toString() + "," + g_dec.toString() + "," + b_dec.toString() +")"
        return rgb

    }
    function rgbToHex(rgb){
        let rgbArray = rgb.slice(4, -1).split(',')
        let rHex = decimalToHex(parseInt(rgbArray[0]))
        let gHex = decimalToHex(parseInt(rgbArray[1]))
        let bHex = decimalToHex(parseInt(rgbArray[2]))
        let hex = "#" + rHex + gHex + bHex
        return hex
    }

    function setTypeOfColor(colorType){
        if(colorType !== typeColor){
            if(colorType === 'rgb'){
                setCurrColor(hexToRGB(currColor))
            }
            else{
                setCurrColor(rgbToHex(currColor))
            }
            setTypeColor(colorType)
            
        }
    }

    function generateRandomColor(){
        let r = Math.floor(Math.random() *256);
        let g = Math.floor(Math.random() *256);
        let b = Math.floor(Math.random() *256);
        let f;
        if(typeColor === 'hex'){
            r = decimalToHex(r);
            g = decimalToHex(g);
            b = decimalToHex(b);
            f = "#"+r+g+b;
        }
        else{
            f = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString()+")"
        }
        setCurrColor(f)
    }

    return (
        <div className="h-screen w-screen" style={{background: currColor}}>
            <button className="bg-cyan-400 mx-1.5" onClick={() => generateRandomColor()}>Generate random color</button>
            <button className="text-white mx-1.5 bg-cyan-400" onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
            <button className="text-white mx-1.5" onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
            <div className="w-screen h-[895px] text-5xl bg-transparent flex flex-col justify-center text-white">
                {currColor}
            </div>
        </div>
    )
}