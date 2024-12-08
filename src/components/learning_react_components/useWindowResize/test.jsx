import useWindowResize from '.'
import '../../../output.css'

export default function UseWindowResizeTest(){

    const windowSize = useWindowResize();
    const {width, height} = windowSize;

    return <div className='h-screen w-screen flex flex-col justify-center bg-teal-300'>
        <h1 className='text-5xl self-center'>Use Window resize hook</h1>
        <p className='text-3xl self-center'>width is : {width}</p>
        <p className='text-3xl self-center'>height is : {height}</p>
    </div>
}