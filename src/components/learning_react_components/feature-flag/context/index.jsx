import { createContext, useEffect, useState } from "react";
import '../../../../output.css'
import featureFlagDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null)

export default function FeatureFlagGlobalState({children}){
    const [loading, setLoading] = useState(false)
    const [enabledFlag, setEnabledFlag] = useState({})
    const [boolArray, setBoolArray] = useState([])

    async function fetchFeaturedFlags() {
        try{
            setLoading(true)
            const response = await featureFlagDataServiceCall();
            setEnabledFlag(response.dummyAPIResponse)
            setBoolArray(response.boolVal)
            setLoading(false)

        } catch(error){
            setLoading(false)
            console.log(error)
            throw new Error(error)
        }
    }

    useEffect(()=>{
        fetchFeaturedFlags();
    }, [])

    return (
        <FeatureFlagContext.Provider value={{loading, enabledFlag, boolArray}}>
            {children}
        </FeatureFlagContext.Provider>
    )
}