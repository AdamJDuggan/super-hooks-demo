import React from "react";
import { Prism } from "react-syntax-highlighter";

export default function Hook(props) {
  const { name, description, details, code, children } = props;
  return (
    <div className="max-w-screen-lg mx-auto pb-10">
      <h2 className="text-5xl font-bold mb-6">{name}</h2>
      <p className="text-2xl mb-10">{description}</p>
      {details && <p className="mb-10">{details()}</p>}
      <h3 className="text-2xl font-bold mb-2">Code</h3>
      <Prism language="javascript">{code}</Prism>
      <h3 className="text-2xl font-bold mt-10 mb-6">Example</h3>
      <div className="bg-white p-4">{children}</div>
    </div>
  );
}
