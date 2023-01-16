import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { UserMenu } from "./UserMenu";


export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        <header style={{
            margin: '20px',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
        <nav>
            <Link to="/login" style={{paddingRight: '20px' }}>Log in</Link>
        </nav>   
            {isLoggedIn && <UserMenu />}
    </header>
    )
}