import '../../../output.css'

export default function Suggestions({data, handleClick}){
    return <ul>
        {
        data && data.length ? data.map((name, idx) => {return <li onClick={handleClick} key={idx}>{name}</li>}) : null
        }
    </ul>
}