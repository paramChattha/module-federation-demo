import React, { Suspense } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store';

const RemoteButton = React.lazy(() => import("remote/Button"))

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> HOST</h1>
      <p>Host Counter: {count}</p>
      <Suspense fallback={<div>loading remote...</div>}>
        <RemoteButton count={count}  onIncrement={()=> dispatch(increment())}/>
      </Suspense>
    </div>
  );
}

export default App;
