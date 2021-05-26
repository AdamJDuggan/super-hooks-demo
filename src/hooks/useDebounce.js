import React from "react";

export default function (cb, delay = 500) {
  const timeout = React.useRef();
  // Clear the timeout when component is destroyed
  React.useEffect(() => () => clearTimeout(timeout.current), []);

  return (...args) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(cb, delay, ...args);
  };
}
