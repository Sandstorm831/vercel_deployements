import MenuItem from "./menu-item"
import '../../../output.css'

export default function MenuList({list = []}){
    return (
        <div className="flex flex-col self-center text-start pl-2 mb-1">
            {
                list && list.length ? 
                list.map((listItem, _)=> {
                    return <MenuItem Item={listItem} />
                }): 
                null
            }
        </div>
    )
    
}