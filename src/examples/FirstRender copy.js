import React from "react";
import { useFirstRender } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
  import { useFirstRender } from "super-hooks";
    
  const firstRender = useFirstRender();  

  return (
      <div>
      {firstRender && <p>First render!</p>}
      </div>
    )
  `;
const hook = getHook("useFirstRender()");

export default function FirstRender() {
  const [count, setCount] = React.useState(0);
  const firstRender = useFirstRender();

  return (
    <Hook {...hook} code={code}>
      <div>
        <strong>First render of component: </strong>
        {firstRender ? " True" : " False"}
      </div>
      <div className="mb-2">
        <strong>Count: </strong>
        {count}
      </div>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="p-1 rounded font-bold bg-blue-600 text-white block"
      >
        Add
      </button>
    </Hook>
  );
}
