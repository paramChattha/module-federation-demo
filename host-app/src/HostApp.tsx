import React, { Suspense } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import  { setKycResult, store } from "./store";
import type { RootState } from "./store";
const KycApp = React.lazy(() => import("kycRemote/KycApp"));

function Main() {
  const divStyle= {
    border: '2px solid blue',
    margin: '10px',
    padding: '10px'
  }
  const dispatch = useDispatch();
  const user = useSelector((s: RootState) => s.user);
  return (
    <div style={divStyle}>
      <h3> User Profile data available in host app: {JSON.stringify(user.profile)}</h3>
<Suspense fallback={<>loading kyc app....</>} >
      <KycApp
        onComplete={(res: Record<string, unknown>) => {
          console.log("KYC result from Host:", res);
          dispatch(setKycResult(res));
        }}
      />
      </Suspense>
      {user.kyc && <div>
          <h3> KYC result in Host store:</h3>
          <pre>{JSON.stringify(user.kyc)}</pre>
        </div>}

    </div>
  )
}

export default function HostApp(){
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}