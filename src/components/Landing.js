import React, { useState } from "react";

export default function Landing() {
  return (
    <div className="overflow-y-auto text-center mb-20">
      <div className="imageGrid"></div>

      <div className="flex flex-col items-center">
        <div className=" mb-20 items-center">
          <div className="font-bold text-center">
            <div className="text-5xl mb-2">Super Hooks</div>
            <div className="text-3xl mb-4">
              A selection of utility hooks for react development
            </div>
            <div className="text-1xl text-orange">npm install super-hooks</div>
          </div>
        </div>
      </div>
    </div>
  );
}
