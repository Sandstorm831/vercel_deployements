import '../../../output.css'
import MenuList from './menu_list'


export default function Treeview({menus=[]}){
    return  <div className='w-screen h-screen bg-purple-200 flex'>
        <div className='w-1/4 bg-blue-400 h-screen flex justify-center'>
            <MenuList list={menus} />
        </div>
    </div>

}