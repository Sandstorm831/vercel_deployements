import '../../../output.css'
import CustomTabs from './tabs'

function RandomComponent(){
    return <h2>This is a random component</h2>
}

export default function TabTest(){

    const tabs = [
        {
            label: 'Tab 1', 
            content: <div>This is content for tab 1</div>
        },
        {
            label: 'Tab 2', 
            content: <div>This is content for tab 2</div>
        },        
        {
            label: 'Tab 3', 
            content: <RandomComponent />
        }
    ]

    function showTabsIndex(tabsIndex){
        // console.log(tabsIndex)
    }

    return <CustomTabs tabsContent={tabs} onChange={showTabsIndex}/>
}