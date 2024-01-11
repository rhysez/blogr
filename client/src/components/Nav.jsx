import { Link } from "react-router-dom"

function Nav(props) {
    
    return (
        <>
            <nav>
                <h3 className='nav-title'>blogr.</h3>
                <div>
                    <Link to='/posts' className='nav-button'>All posts</Link>
                    <Link to='/' className='nav-button'>Home</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav