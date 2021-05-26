import React from "react";
import { useShowHideElement } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
    import { useShowHideElement } from "super-hooks";
    
    const dropDownMenu = useShowHideElement();
    
    return (
      <>
        <button onClick={dropDownMenu.show}>Show  menu</button>

        {dropDownMenu.visible && (
          <div ref={dropDownMenu.ref}>
            <h2>Menu</h2>
            <p>Item 1</p>
            <p>Item 2</p>
          </div>
        )}
      </>
    )
    `;

const Details = () => (
  <ul className="mx-4">
    <li className="mb-4">The hook returns an object with the following...</li>
    <li className="mb-4 ml-2 list-disc">
      <strong>visible: </strong> A boolean value used in your jsx to
      conditionally dispaly the element. By default visible is set to false.
      However, you can overide this by passing an arguement true to the hook
      and: <strong>useShowHideElement(true)</strong>.
    </li>
    <li className="mb-4 ml-2 list-disc">
      <strong>ref: </strong> A ref to be placed on the element/div which you
      want to show/hide. If you click outside of this element it will set
      visible to false.
    </li>
    <li className="mb-4 ml-2 list-disc">
      <strong>show(), hide() and toggle(): </strong> Functions which change the
      state of visible. You can guess what they each do!
    </li>
  </ul>
);

const hook = getHook("useShowHideElement()");

export default function ShowHideMenu() {
  const dropDownMenu = useShowHideElement();
  console.log(dropDownMenu);
  return (
    <Hook {...hook} details={Details} code={code}>
      <div style={{ minHeight: 192 }}>
        <button
          className="p-1 rounded font-bold bg-blue-600 text-white block"
          onClick={dropDownMenu.show}
        >
          Show menu
        </button>
        {dropDownMenu.visible && (
          <div
            ref={dropDownMenu.ref}
            className="bg-purple-100 rounded shadow-lg p-4 w-36 m-2"
          >
            <h2 className="font-bold mb-2">Menu</h2>
            <p>List item 1</p>
            <p>List item 2</p>
          </div>
        )}
      </div>
    </Hook>
  );
}
