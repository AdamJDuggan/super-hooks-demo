import React from "react";
import { useScrollWithKeys } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
    import { useScrollWithKeys } from "super-hooks";
    
    const { scrollRef } = useScrollWithKeys(true);
    
    return (
      <div ref={scrollRef}>
        <div>Row 1</div>
        <div>Row 2</div>
        <div>Row 3</div>
      </div>
    )
    `;
const hook = getHook("useScrollWithKeys()");

export default function InitialFocus() {
  const { scrollRef } = useScrollWithKeys(true);
  const rows = [
    "#3273dc",
    "#00d1b2",
    "#ff3860",
    "#363636",
    "#3273dc",
    "#00d1b2",
    "#ff3860",
    "#363636",
  ];
  return (
    <Hook {...hook} code={code}>
      <div ref={scrollRef}>
        {rows.map((row, index) => (
          <div
            style={{
              background: row,
              color: "white",
              height: 300,
              padding: 50,
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </Hook>
  );
}
