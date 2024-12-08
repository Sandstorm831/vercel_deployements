import { useRef } from 'react'
import '../../../output.css'

export default function SectoinScroller(){
    
    const referer = useRef(null)

    const SectionCards = [
        {   
            label: 'First Card',
            style: 'w-screen h-screen bg-black text-white text-5xl',
        },
        {
            label: 'Second Card',
            style: 'w-screen h-screen bg-fuchsia-950 text-white text-5xl',
        },
        {
            label: 'Third Card',
            style: 'w-screen h-screen bg-emerald-900 text-white text-5xl',
        },
        {
            label: 'Fourth Card',
            style: 'w-screen h-screen bg-rose-950 text-white text-5xl',
        },
    ]

    function handleSectionScroller(){
        const pos = referer.current.offsetTop;
        let height_ini = document.documentElement.scrollTop;
        console.log(pos, height_ini)
        if(pos>height_ini){
            const adder = 20
            const closeInterval = setInterval(() => {
                height_ini += adder;
                window.scrollTo(0,Math.min(height_ini,document.documentElement.scrollHeight-document.documentElement.clientHeight))
                if(height_ini >= Math.min(pos,document.documentElement.scrollHeight-document.documentElement.clientHeight )) clearInterval(closeInterval);
            }, 1);
        }
        else{
            const deducter = 40
            const closeInterval = setInterval(() => {
                height_ini -= deducter
                window.scrollTo(0, Math.max(height_ini,0))
                if(height_ini <= pos) clearInterval(closeInterval)
            }, 1);
        }
        return;
    }

    return <div className='h-max w-screen'>
        <div className='h-96 w-screen flex flex-col justify-center'>
            <p className='text-5xl self-center'>Section Scroller</p>
            <button onClick={handleSectionScroller} className='border-2 rounded-full self-center bg-teal-200'>Click to Scroll to section card 2</button>
        </div>
        {
            SectionCards.map((Cards,idx) => { return <div ref={idx === 1 ? referer : null} className={Cards.style}>{Cards.label}</div>})
        }
    </div>
}