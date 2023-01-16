import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { decrement, increment } from "redux/myValue/slice";


export const AppBar = () => {

    return (
        <header style={{
            margin: '20px',        }}>
        <nav>
                <Link to="/login" style={{paddingRight: '20px' }}>Log in</Link>
                
        </nav>     
    </header>
    )
}