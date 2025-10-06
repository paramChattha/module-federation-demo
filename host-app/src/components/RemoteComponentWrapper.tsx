import React, { Suspense } from "react";

const RemoteButton = React.lazy(()=> import("remote_app/Button"));

export const RemoteComponentWrapper = () => {

  return(
    <div>
      <Suspense fallback={<div>loading ...</div>}>
      <RemoteButton text= "remoteButton" onClick= {()=> alert('button clicked')}/>
      </Suspense>
  </div>)
}