import { useContext, useState } from 'react'
import Accordian from '../accordian'
import LightDarkMode from '../light_dark_mode'
import RandomColor from '../random_color'
import StarRating from '../star_rating'
import '../../../output.css'
import { FeatureFlagContext } from './context'


export default function FeatureFlags() {
    const { loading, _ , boolArray } = useContext(FeatureFlagContext)
    const [checkedComps, setCheckedComps] = useState([false, false, false, false])
    const [selectingComponent, setSelectingComponent] = useState(true)
    const componentsToRender = [
        {
            key: 'showAccordion',
            component: <Accordian />
        },
        {
            key: 'showRandomColor',
            component: <RandomColor />
        },
        {
            key: 'showLightDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showStarRating',
            component: <StarRating />
        }
    ]

    function checkEnabledFlag(componentKey) {
        return checkedComps[componentKey];
    }

    function handleClick(idx){
        const newArray = [...checkedComps];
        newArray[idx] = !newArray[idx];
        setCheckedComps(newArray);
    }

    if (loading) return <h1>Loading, wait, anyways you can do nothing xD</h1>
    if(selectingComponent) {
        return <div className='flex flex-col justify-center h-screen w-screen bg-blue-600'>
            <h1 className='text-5xl self-center'>Feature Flags</h1>
            {
                componentsToRender.map((compItem, idx) => {
                    return <label >
                        <input checked={checkedComps[idx]} onClick={() => {return handleClick(idx)}} type='checkbox'/>
                        {compItem.key}
                    </label>
                })
            }
            <button onClick={() => setSelectingComponent(false)}>Submit</button>
        </div>
    }
    return <div className='flex flex-col justify-center h-max w-screen bg-blue-600'>
        <h1 className='text-5xl self-center'>Feature Flags</h1>
        <button onClick={() => setSelectingComponent(!selectingComponent)} >select component to display</button>
        {
            componentsToRender.map((contentItem, idx) => { return checkEnabledFlag(idx) ? contentItem.component : null })
        }

    </div>
}