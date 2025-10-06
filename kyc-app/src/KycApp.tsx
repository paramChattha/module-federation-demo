import { Provider, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { completeKyc, startKyc, store, type RootState } from './store';
import type { KycResult } from '../types/kyc';

interface kycAppProps{
  onComplete?: ( result: KycResult) => void;
}

function KycFlow({onComplete}: kycAppProps) {
  const dispatch = useDispatch();
  const {status, result} = useSelector((s: RootState) => s.kyc);

  const runKyc = () => {
    dispatch(startKyc());
    setTimeout(()=> {
      const res: KycResult = {
        status: true,
        userId: "u-123",
        timestamp: Date.now()
      };
      dispatch(completeKyc(res));
      onComplete?.(res);
    }, 1999)
  }

    const divStyle = {
    border: '2px solid red', // Sets a 2px solid blue border
    padding: '10px',
  };

  return (
    <>
      <div  style={divStyle}>
        <h1> Kyc App async activiity</h1>
          <p>Status:{status}</p>
          <button onClick={runKyc}> Start Kyc</button>
          {status === "complete"} && <>{JSON.stringify(result)}</>
       </div>
    </>
  )
}

export default function KycApp(props: kycAppProps) {

  return (
    <Provider store={store}>
    <KycFlow {...props}/>
    </Provider>
  )
}
