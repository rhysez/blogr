import { Link } from "react-router-dom"

function Nav(props) {
    
    return (
        <>
            <nav>
                <h3 className='nav-title'>blogr.</h3>
                <Link to='/posts' className='nav-button'>All posts</Link>
            </nav>
        </>
    )
}

export default Nav