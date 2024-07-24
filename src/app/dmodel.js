import React from "react";
import Spline from '@splinetool/react-spline/next';

function Dmodel() {
  return (
    <div className="flex items-center justify-end  min-h-screen">
      <div className="h-96 w-4/5">
        <Spline
          scene="https://prod.spline.design/owS24KRW9uBkh1sg/scene.splinecode" 
        />
      </div>
    </div>
  );
}

export default Dmodel;
