import React from "react";

export default function Header() {
  return (
    <div className="flex content-center justify-between bg-black text-white font-bold p-6 mb-7 top-0">
      <a href="/">Super Hooks </a>
      <a href="https://www.npmjs.com/package/super-hooks">
        <i className="fab fa-npm fa-2x"></i>
      </a>
    </div>
  );
}
