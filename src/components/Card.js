import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, description, keywords, url } = props;
  return (
    <Link to={url}>
      <div className="text-left p-4 mb-6 rounded overflow-hidden shadow-lg  cursor-pointer w-full bg-white">
        <div className="font-bold  text-xl mb-4 mt-2">{name}</div>
        <p className="mb-6">{description}</p>
        <div className="flex flex-wrap">
          {keywords &&
            keywords.map((keyword) => (
              <span className="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {keyword}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
}
