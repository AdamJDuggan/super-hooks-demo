import React from "react";
import { useToggleInput } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
    import { useToggleInput } from "super-hooks";
    
    const { text, setText, edit, setEdit, inputRef, onSave } = useToggleInput(
    () => alert(text),
    "Blanka"
  );

    return (
       {edit ? (
        <form onSubmit={onSave}>
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Save</button>
        </form>
      ) : (
        <div  onClick={() => setEdit(true)}>
          {text}
        </div>
      )}
    )
    `;
const hook = getHook("useToggleInput()");

export default function ToggleInput() {
  const { text, setText, edit, setEdit, inputRef, onSave } = useToggleInput(
    () => alert(text),
    "Current Value. Click me to update"
  );
  return (
    <Hook {...hook} code={code}>
      {edit ? (
        <form onSubmit={onSave} className="flex">
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="rounded border-2 border-grey-400 mr-2 p-1"
          />
          <button
            className="p-1 rounded font-bold bg-blue-600 text-white block"
            disabled={text === ""}
          >
            Save
          </button>
        </form>
      ) : (
        <div className="cursor-pointer" onClick={() => setEdit(true)}>
          {text}
        </div>
      )}
    </Hook>
  );
}
