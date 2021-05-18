import React from "react";
import { useInitialFocus } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
    import { useInitialFocus } from "super-hooks";
    
    const initialFocus = useInitialFocus();
    
    return (
      <input ref={initialFocus} />
    )
    `;
const hook = getHook("useInitialFocus()");

export default function InitialFocus() {
  const initialFocus = useInitialFocus();
  return (
    <Hook {...hook} code={code}>
      <label className="block">Focus this one on render</label>
      <input
        className="rounded border-2 border-purple-400"
        ref={initialFocus}
      />
      <label className="block mt-4">Not this one</label>
      <input className="rounded border-2 border-purple-400" />
    </Hook>
  );
}
