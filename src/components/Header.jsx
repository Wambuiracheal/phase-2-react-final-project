import {Link} from 'react-router-dom'
function Header(){
    return(
    <>
        <div className='header'>
        <nav className='nav'>
            <Link to={"/"}>Landing Page</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
           
        </nav>
        </div> 
    </>

    )
}

export default Header