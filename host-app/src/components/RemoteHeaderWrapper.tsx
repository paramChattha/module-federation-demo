import React, { Suspense } from "react";

const Header = React.lazy(() => import("remote_app/Header"));

export const RemoteHeaderWrapper = () => {

  return(
    <div>
      <Suspense fallback={<div>loading ...</div>}>
      <Header />
      </Suspense>
  </div>)
}