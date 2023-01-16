// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 
// import { useSelector } from 'react-redux'

// const useLogOutRedirect = () => {
//     const navigate = useNavigate();
//     const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    
//     useEffect(() => {
//         if(!isLoggedIn) {
//             navigate('/login', {replace: true})
//         }
//     }, [isLoggedIn, navigate]);
// }
import {useLogOutRedirect} from 'hooks/useLogOutRedirect'

export const DashboardPage = () => {
    // const navigate = useNavigate();
    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    
    // useEffect(() => {
    //     if(!isLoggedIn) {
    //         navigate('/login', {replace: true})
    //     }
    // }, [isLoggedIn, navigate]);
    useLogOutRedirect();

    return <div>Dashboard Page</div>
};
