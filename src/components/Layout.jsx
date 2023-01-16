import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "redux/myValue/slice";


export const Layout = () => {
    const dispatch = useDispatch();
    const valueRedux = useSelector(state => state.myValue);
    console.log(valueRedux);

    return (
        <>            
            <AppBar />
        <hr />
        <br />
            <Outlet />  
            <div
                style={{
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101'
                }}
            >
                React Redux Test
            </div>
            <div
                style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center' }}>
                    {valueRedux}
                    <button onClick={() => dispatch(increment(100))}>Increment</button>
                    <button onClick={() => dispatch(decrement(50))}>Decrement</button>
            </div>
      </>
    )
}