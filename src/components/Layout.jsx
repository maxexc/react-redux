import { Link } from "react-router-dom";
import { decrement, increment } from "redux/store"
import {useSelector, useDispatch} from 'react-redux';


export const Layout = () => {
    const dispatch = useDispatch();
    const valueRedux = useSelector(state => state.myValue);
    console.log(valueRedux);

    return (
        <>
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
          justifyContent: 'center',
          alignItems: 'center'}}>
          <nav>
                <Link to="/login">Log in</Link>
              {valueRedux}
              <button onClick={() => dispatch(increment(100))}>Increment</button>
              <button onClick={() => dispatch(decrement(50))}>Decrement</button>
          </nav>
      </div>
      </>
    )
}