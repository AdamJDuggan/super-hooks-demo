import React, { useState } from "react";
import { useStateObject } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
    import { useStateObject } from "super-hooks";
    
    const [state, setState] = useStateObject({
        name: "Blanka",
        country: "Brazil",
        color: "green",
    });
    
    return (
      <input value={state.name} onChange={e => setState({name: e.target.value})}
    )
    `;
const hook = getHook("useStateObject()");

export default function InitialFocus() {
  const [showState, setShowState] = useState(false);

  const [state, setState] = useStateObject({
    name: "Blanka",
    country: "Brazil",
    color: "Green",
  });

  return (
    <Hook {...hook} code={code}>
      <div className="flex flex-wrap justify-center">
        <div className="m-6 bg-blue-100 rounded p-4">
          <div className="text-xl font-bold mb-5">Update values</div>
          <label className="block font-bold">Name</label>
          <input
            value={state.name}
            onChange={(e) => setState({ name: e.target.value })}
            className="rounded border-2 border-grey-400 mb-3 p-1"
          />
          <label className="block font-bold">Country</label>
          <input
            value={state.country}
            onChange={(e) => setState({ country: e.target.value })}
            className="rounded border-2 border-grey-400 mb-3 p-1"
          />
          <label className="block font-bold">Color</label>
          <input
            value={state.color}
            onChange={(e) => setState({ color: e.target.value })}
            className="rounded border-2 border-grey-400 mb-3 p-1"
          />
        </div>
        <div
          style={{ width: 296 }}
          className="m-6 pt-6 bg-purple-100 rounded p-4"
        >
          <div className="text-xl font-bold mb-5">Display values</div>

          <p className="mb-2">
            <strong>Name: </strong>
            {state.name}
          </p>
          <p className="mb-2">
            <strong>Country: </strong>
            {state.country}
          </p>
          <p className="mb-2">
            <strong>Color: </strong>
            {state.color}
          </p>
        </div>
      </div>
    </Hook>
  );
}
