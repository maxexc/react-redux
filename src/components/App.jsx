import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from 'redux/store';


const App = () => {
  const dispatch = useDispatch();
  const valueRedux = useSelector(state => state.myValue);
  console.log(valueRedux);

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React Redux Test
      </div>
      <div>
          <nav>
              {valueRedux}
              <button onClick={() => dispatch(increment(100))}>Increment</button>
              <button onClick={() => dispatch(decrement(50))}>Decrement</button>
          </nav>
      </div>
      
    </>    
  );
};

export default App