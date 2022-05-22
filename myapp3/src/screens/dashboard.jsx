import {Link} from 'react-router-dom';

export default function Dashboard()
{
    return(
        <>
        <Link className='link6' to="/signup">SignUp Page</Link>
        <br />
        <Link className='link7' to="/login">Login Page</Link>
        <h1 className='headingg'>Dashboard Page</h1>
        </>
    )
}