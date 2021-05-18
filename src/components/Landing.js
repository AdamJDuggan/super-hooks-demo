import React from "react";
import Card from "./Card";
import { hooks } from "../hooksData";

export default function Landing() {
  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col items-center ">
        <input
          className="bg-white mb-10 py-2 px-3 rounded border border-gray-800"
          placeholder="Filter by keyword or name"
        />
        {/* Hook Cards- list with key info on each */}
        <div className="max-w-screen-sm">
          {hooks.map((hook) => (
            <Card {...hook} key={hook.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
