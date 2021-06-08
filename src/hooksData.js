const hooks = [
  {
    name: "useScrollToBottom()",
    description: `Recieves an array and returns a ref which, when placed on a div wrapping the array, 
    will scroll to bottom of the div when new elements are added to the array.`,
    keywords: ["scroll", "bottom", "chatbox", "new", "messages"],
    url: "/scrollToBottom",
  },
  {
    name: "useShowHideElement()",
    description: "Show and hide an element such as a dropdown menu.",
    keywords: ["dropdown", "menu", "open", "outside", "click"],
    url: "/showHideElement",
  },
  {
    name: "useScrollWithKeys()",
    description:
      "Returns a ref. Place this ref on a div and use the arrow keys to scroll between child elements of that parent div.",
    keywords: ["scroll", "arrow", "keys", "rows", "position"],
    url: "/scrollWithKeys",
  },
  {
    name: "useWindowWidth()",
    description: `When you need javascript for breakpoints and responsive design.`,
    keywords: ["window", "responsive", "width", "breakpoints"],
    url: "/windowWidth",
  },
  {
    name: "useStateObject()",
    description:
      "Merge updated properties into large state object to prevent having to always spread other values.",
    keywords: ["state", "object", "merge", "spread"],
    url: "/stateObject",
  },

  {
    name: "useToggleInput()",
    description:
      "When you want to toggle between a text value and an input to update that value.",
    keywords: ["input", "inline", "update", "click"],
    url: "/toggleInput",
  },
  {
    name: "useInitialFocus()",
    description:
      "Returns a ref which can be placed on an element to focus that elememt as soon as it renders.",
    keywords: ["ref", "current", "focus", "initial", "input"],
    url: "/initialFocus",
  },

  {
    name: "useFirstRender()",
    description:
      "Returns a boolean which is true when the enclosing components first renders.",
    keywords: ["first", "render", "mount", "initial"],
    url: "/firstRender",
  },
];

const getHook = (name) => {
  return hooks.find((hook) => hook.name === name);
};

export { hooks };
export { getHook };
