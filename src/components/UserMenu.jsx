import { useDispatch, useSelector } from 'react-redux'
import {logOut} from '../redux/userSlice'

export const UserMenu = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.user.login);
    // const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    // if (login === '') {
    //     return !isLoggedIn;
    // }

    return (
    <div>
            {login} 
            {/* {isLoggedIn &&  */}
            <button type='button' onClick={() => dispatch(logOut())}>
                Log Out
            </button>
            {/* } */}
    </div>
    )
}; 