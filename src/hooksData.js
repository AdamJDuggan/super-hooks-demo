const hooks = [
  {
    name: "useInitialFocus()",
    description:
      "Returns a ref which can be placed on an element to focus that elememt as soon as it renders",
    keywords: ["ref", "current", "focus", "initial", "input"],
    url: "/initialFocus",
  },
  {
    name: "useWindowWidth()",
    description:
      "When you need javascript for breakpoints and responsive design",
    keywords: ["window", "responsive", "width", "breakpoints"],
    url: "/windowWidth",
  },
  {
    name: "useFirstRender()",
    description:
      "Returns a boolean which is true when the enclosing components first renders",
    keywords: ["first", "render", "mount", "initial"],
    url: "/firstRender",
  },

  {
    name: "useScrollWithKeys()",
    description:
      "Returns a ref. Place this ref on a div and use the arrow keys to scroll the page to child elements",
    keywords: ["scroll", "arrow", "keys", "rows", "position"],
  },
  {
    name: "useScrollTobottom()",
    description:
      "Returns a ref. Place on a list and when new items are added to list it with scroll to the last/bottom element",
    keywords: ["scroll", "bottom", "chatbox", "new", "messages"],
  },
  {
    name: "useShowHideMenu()",
    description: "Show, hide and position a dropDown menu",
    keywords: ["dropdown", "menu", "open", "outside", "click"],
  },
  {
    name: "useStateObject()",
    description:
      "Merge new properties into large state object to prevent having to always spread other values",
    keywords: ["state", "object", "merge", "spread"],
  },
  {
    name: "useToggleInput()",
    description:
      "When you want to toggle between a text value and an input to update that value ",
    keywords: ["input", "inline", "update", "click"],
  },
];

const getHook = (name) => {
  return hooks.find((hook) => hook.name === name);
};

export { hooks };
export { getHook };
