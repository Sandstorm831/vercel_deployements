import '../../../output.css'

export default function UserCard({user}){
    const date_obj = new Date(user.created_at)
    return <div className='flex flex-col justify-center '>
        <img alt='Nothing to see here' src={user.avatar_url} className='h-96 w-96 self-center rounded-full'/>
        <h1>Date Joined: <span className='mx-4'>{ `${date_obj.getDate()} ${date_obj.toLocaleString('en-us', {month: 'short'})} ${date_obj.getFullYear()}` }</span></h1>
        <a href={user.html_url} className='bg-gray-950 border-2 m-2 w-max self-center text-white'>{user.login}</a>
        <h1>Name: <span className='mx-4'>{user.login}</span></h1>
        <h1>followers: <span className='mx-4'>{user.followers}</span></h1>
        <h1>following: <span className='mx-4'>{user.following}</span></h1>
        <h1>Public repos: <span className='mx-4'>{user.public_repos}</span></h1>
    </div>
}