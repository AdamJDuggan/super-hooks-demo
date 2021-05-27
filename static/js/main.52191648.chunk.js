(this["webpackJsonpsuper-hooks-demo"]=this["webpackJsonpsuper-hooks-demo"]||[]).push([[0],{323:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),o=n(53),c=n.n(o),i=(n(64),n(15)),l=n(3),a=n(0);function d(){return Object(a.jsxs)("div",{className:"flex content-center justify-between bg-black text-white font-bold p-6 mb-7 top-0",children:[Object(a.jsx)("a",{href:"/",children:"Super Hooks "}),Object(a.jsx)("a",{href:"https://adamjduggan.github.io/super-hooks-demo/",children:Object(a.jsx)("i",{className:"fab fa-npm fa-2x"})})]})}var b=n(2);function u(e){var t=e.name,n=e.description,s=e.keywords,r=e.url;return Object(a.jsx)(i.b,{to:r,children:Object(a.jsxs)("div",{className:"text-left p-4 mb-6 rounded overflow-hidden shadow-lg  cursor-pointer w-full bg-white",children:[Object(a.jsx)("div",{className:"font-bold  text-xl mb-4 mt-2",children:t}),Object(a.jsx)("p",{className:"mb-6",children:n}),Object(a.jsx)("div",{className:"flex flex-wrap",children:s&&s.map((function(e){return Object(a.jsx)("span",{className:"inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2",children:e})}))})]})})}var j=[{name:"useScrollToBottom()",description:"Recieves an array and returns a ref which, when placed on a div wrapping the array, \n    will scroll to bottom of the div when new elements are added to the array.",keywords:["scroll","bottom","chatbox","new","messages"],url:"scrollToBottom"},{name:"useShowHideElement()",description:"Show and hide an element such as a dropdown menu.",keywords:["dropdown","menu","open","outside","click"],url:"showHideElement"},{name:"useScrollWithKeys()",description:"Returns a ref. Place this ref on a div and use the arrow keys to scroll between child elements of that parent div.",keywords:["scroll","arrow","keys","rows","position"],url:"/scrollWithKeys"},{name:"useWindowWidth()",description:"When you need javascript for breakpoints and responsive design.",keywords:["window","responsive","width","breakpoints"],url:"/windowWidth"},{name:"useStateObject()",description:"Merge updated properties into large state object to prevent having to always spread other values.",keywords:["state","object","merge","spread"],url:"stateObject"},{name:"useToggleInput()",description:"When you want to toggle between a text value and an input to update that value.",keywords:["input","inline","update","click"],url:"toggleInput"},{name:"useInitialFocus()",description:"Returns a ref which can be placed on an element to focus that elememt as soon as it renders.",keywords:["ref","current","focus","initial","input"],url:"/initialFocus"},{name:"useFirstRender()",description:"Returns a boolean which is true when the enclosing components first renders.",keywords:["first","render","mount","initial"],url:"/firstRender"}],h=function(e){return j.find((function(t){return t.name===e}))};function m(){return Object(a.jsxs)("div",{className:"overflow-y-auto text-center",children:[Object(a.jsx)("div",{className:"imageGrid"}),Object(a.jsxs)("div",{className:"flex flex-col items-center",children:[Object(a.jsx)("div",{className:" mb-20 items-center",children:Object(a.jsxs)("div",{className:"font-bold text-center",children:[Object(a.jsx)("div",{className:"text-5xl mb-2",children:"Super Hooks"}),Object(a.jsx)("div",{className:"text-3xl mb-4",children:"A selection of utility hooks for react development"}),Object(a.jsx)("div",{className:"text-1xl text-orange",children:"npm install super-hooks"})]})}),Object(a.jsx)("div",{className:"max-w-screen-sm",children:j.map((function(e){return Object(s.createElement)(u,Object(b.a)(Object(b.a)({},e),{},{key:e.name}))}))})]})]})}var p=Object(l.f)((function(e){var t=e.history;return Object(s.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),x=n(11),O=n(5),f=n(325);function v(e){var t=e.name,n=e.description,s=e.details,r=e.code,o=e.children;return Object(a.jsxs)("div",{className:"max-w-screen-lg mx-auto pb-10",children:[Object(a.jsx)("h2",{className:"text-5xl font-bold mb-6",children:t}),Object(a.jsx)("p",{className:"text-2xl mb-10",children:n}),s&&Object(a.jsx)("p",{className:"mb-10",children:s()}),Object(a.jsx)("h3",{className:"text-2xl font-bold mb-2",children:"Code"}),Object(a.jsx)(f.a,{language:"javascript",children:r}),Object(a.jsx)("h3",{className:"text-2xl font-bold mt-10 mb-6",children:"Example"}),Object(a.jsx)("div",{className:"bg-white p-4",children:o})]})}var g=h("useFirstRender()");function w(){var e=r.a.useState(0),t=Object(x.a)(e,2),n=t[0],s=t[1],o=Object(O.useFirstRender)();return Object(a.jsxs)(v,Object(b.a)(Object(b.a)({},g),{},{code:'\n  import { useFirstRender } from "super-hooks";\n    \n  const firstRender = useFirstRender();  \n\n  return (\n      <div>\n      {firstRender && <p>First render!</p>}\n      </div>\n    )\n  ',children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"First render of component: "}),o?" True":" False"]}),Object(a.jsxs)("div",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"Count: "}),n]}),Object(a.jsx)("button",{onClick:function(){return s((function(e){return e+1}))},className:"p-1 rounded font-bold bg-blue-600 text-white block",children:"Add"})]}))}var N=h("useInitialFocus()");function y(){var e=Object(O.useInitialFocus)();return Object(a.jsxs)(v,Object(b.a)(Object(b.a)({},N),{},{code:'\n    import { useInitialFocus } from "super-hooks";\n    \n    const initialFocus = useInitialFocus();\n    \n    return (\n      <input ref={initialFocus} />\n    )\n    ',children:[Object(a.jsx)("label",{className:"block",children:"Focus this one on render"}),Object(a.jsx)("input",{className:"rounded border-2 border-purple-400",ref:e}),Object(a.jsx)("label",{className:"block mt-4",children:"Not this one"}),Object(a.jsx)("input",{className:"rounded border-2 border-grey-9  00"})]}))}var k=function(){return Object(a.jsxs)("ul",{className:"mx-4",children:[Object(a.jsxs)("li",{className:"list-disc mb-4",children:["The hook returns the following values:"," ",Object(a.jsx)("strong",{children:"screenWith, isMobile, isTablet, isDesktop"})," and",Object(a.jsx)("strong",{children:" isDesktopLarge"}),"."]}),Object(a.jsxs)("li",{className:"list-disc mb-4",children:[Object(a.jsx)("strong",{children:"screenWidth"})," is always set to window.innerWidth so returns a number value which is pixels."]}),Object(a.jsxs)("li",{className:"list-disc mb-4",children:[Object(a.jsx)("strong",{children:"isMobile"})," and other values are booleans which return true when the ",Object(a.jsx)("strong",{children:"screenWidth"})," is less than a number which is mapped to that value. For example, ",Object(a.jsx)("strong",{children:"isDesktop"})," = true when",Object(a.jsx)("strong",{children:" screenWidth"})," is less than 1280px."]}),Object(a.jsx)("li",{className:"list-disc mb-4",children:"If you do not pass any values to the hook it will by default map the following values:"}),Object(a.jsxs)("div",{className:"ml-4 mb-4",children:[Object(a.jsxs)("li",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"isMobile:"})," screenWidth < 700px"]}),Object(a.jsxs)("li",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"isTablet:"})," screenWidth < 1024px"]}),Object(a.jsxs)("li",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"isDesktop:"})," screenWidth < 1280px"]}),Object(a.jsxs)("li",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"isDesktopLarge:"})," screenWidth < 1536px"]})]}),Object(a.jsxs)("li",{className:"list-disc mb-4",children:["However, you can set your own breakpoints by passing four number values to the hook. In the below example ",Object(a.jsx)("strong",{children:"isMobile"})," is now true when the screenWidth is less than 600px."]})]})},S=h("useWindowWidth()");function W(){var e=Object(O.useWindowWidth)(),t=e.screenWidth,n=e.isMobile,s=e.isTablet,r=e.isDesktop,o=e.isDesktopLarge;return Object(a.jsx)(v,Object(b.a)(Object(b.a)({},S),{},{details:k,code:'\nimport { useWindowWidth } from "super-hooks";\n    \nconst { \n  screenWidth, \n  isMobile, \n  isTablet, \n  isDesktop, \n  isDesktopLarge } = useWindowWidth(600, 1000, 1300, 1500);\n\n  return (\n    <div>\n      <p>The screen width is: {screenWidth}</p>\n\n      // Only show to messaage to mobile users \n      {isMobile && <p>Hello mobile user</p>}\n\n      // Only show to messaage to users using a desktop computer \n      {!isTablet && <p>Hello desktop user</p>}\n\n    </div>\n  )\n    ',children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"Screen width: "}),t]}),Object(a.jsx)("div",{className:"flex flex-wrap"}),Object(a.jsx)("strong",{style:{color:n?"green":"red"},className:"mr-4 mb-2",children:"isMobile"}),Object(a.jsx)("strong",{style:{color:s?"green":"red"},className:"mr-4 mb-2",children:"isTablet"}),Object(a.jsx)("strong",{style:{color:r?"green":"red"},className:"mr-4 mb-2",children:"isDesktop"}),Object(a.jsx)("strong",{style:{color:o?"green":"red"},className:"mr-4 mb-2",children:"isDesktopLarge"})]})}))}var T=n(59),C=h("useScrollToBottom()");function R(){var e=Object(s.useState)(Array.from({length:30},(function(e,t){return" Post ".concat(t+1)}))),t=Object(x.a)(e,2),n=t[0],r=t[1],o=Object(s.useState)(""),c=Object(x.a)(o,2),i=c[0],l=c[1],d=Object(O.useScrollToBottom)(n).scrollContainer;return Object(a.jsxs)(v,Object(b.a)(Object(b.a)({},C),{},{code:'\n  import { useScrollToBottom } from "super-hooks";\n\n  const { scrollContainer } = useScrollToBottom(posts);\n  \n  return (\n      <div  ref={scrollContainer}>\n      {posts.map(post => <li>{post}</li>)}\n      </div>\n    )\n  ',children:[Object(a.jsx)("div",{className:"rounded border border-gray-800 p-2 h-24 overflow-auto mb-2",ref:d,children:n.map((function(e,t){return Object(a.jsx)("p",{children:e},t)}))}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r((function(e){return[].concat(Object(T.a)(e),[i])})),l("")},children:[Object(a.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},className:"py-2 px-3 rounded border border-gray-800 mb-2"}),Object(a.jsx)("button",{className:"p-1 rounded font-bold bg-blue-600 text-white block",children:"Add Post"})]})]}))}var F=function(){return Object(a.jsxs)("ul",{className:"mx-4",children:[Object(a.jsx)("li",{className:"mb-4",children:"The hook returns an object with the following..."}),Object(a.jsxs)("li",{className:"mb-4 ml-2 list-disc",children:[Object(a.jsx)("strong",{children:"visible: "})," A boolean value used in your jsx to conditionally dispaly the element. By default visible is set to false. However, you can overide this by passing an arguement (true) to the hook like this",Object(a.jsx)("strong",{children:"useShowHideElement(true)"}),"."]}),Object(a.jsxs)("li",{className:"mb-4 ml-2 list-disc",children:[Object(a.jsx)("strong",{children:"ref: "})," A ref to be placed on the element/div which you want to show/hide. If you click outside of this element it will set visible to false."]}),Object(a.jsxs)("li",{className:"mb-4 ml-2 list-disc",children:[Object(a.jsx)("strong",{children:"show(), hide() and toggle(): "})," Functions which change the state of visible. You can guess what they each do!"]})]})},I=h("useShowHideElement()");function D(){var e=Object(O.useShowHideElement)();return console.log(e),Object(a.jsx)(v,Object(b.a)(Object(b.a)({},I),{},{details:F,code:'\n    import { useShowHideElement } from "super-hooks";\n    \n    const dropDownMenu = useShowHideElement();\n    \n    return (\n      <>\n        <button onClick={dropDownMenu.show}>Show  menu</button>\n\n        {dropDownMenu.visible && (\n          <div ref={dropDownMenu.ref}>\n            <h2>Menu</h2>\n            <p>Item 1</p>\n            <p>Item 2</p>\n          </div>\n        )}\n      </>\n    )\n    ',children:Object(a.jsxs)("div",{style:{minHeight:192},children:[Object(a.jsx)("button",{className:"p-1 rounded font-bold bg-blue-600 text-white block",onClick:e.show,children:"Show menu"}),e.visible&&Object(a.jsxs)("div",{ref:e.ref,className:"bg-purple-100 rounded shadow-lg p-4 w-36 m-2",children:[Object(a.jsx)("h2",{className:"font-bold mb-2",children:"Menu"}),Object(a.jsx)("p",{children:"List item 1"}),Object(a.jsx)("p",{children:"List item 2"})]})]})}))}var M=h("useStateObject()");function E(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),n=(t[0],t[1],Object(O.useStateObject)({name:"Blanka",country:"Brazil",color:"Green"})),r=Object(x.a)(n,2),o=r[0],c=r[1];return Object(a.jsx)(v,Object(b.a)(Object(b.a)({},M),{},{code:'\n    import { useStateObject } from "super-hooks";\n    \n    const [state, setState] = useStateObject({\n        name: "Blanka",\n        country: "Brazil",\n        color: "green",\n    });\n    \n    return (\n      <input value={state.name} onChange={e => setState({name: e.target.value})}\n    )\n    ',children:Object(a.jsxs)("div",{className:"flex flex-wrap justify-center",children:[Object(a.jsxs)("div",{className:"m-6 bg-blue-100 rounded p-4",children:[Object(a.jsx)("div",{className:"text-xl font-bold mb-5",children:"Update values"}),Object(a.jsx)("label",{className:"block font-bold",children:"Name"}),Object(a.jsx)("input",{value:o.name,onChange:function(e){return c({name:e.target.value})},className:"rounded border-2 border-grey-400 mb-3 p-1"}),Object(a.jsx)("label",{className:"block font-bold",children:"Country"}),Object(a.jsx)("input",{value:o.country,onChange:function(e){return c({country:e.target.value})},className:"rounded border-2 border-grey-400 mb-3 p-1"}),Object(a.jsx)("label",{className:"block font-bold",children:"Color"}),Object(a.jsx)("input",{value:o.color,onChange:function(e){return c({color:e.target.value})},className:"rounded border-2 border-grey-400 mb-3 p-1"})]}),Object(a.jsxs)("div",{style:{width:296},className:"m-6 pt-6 bg-purple-100 rounded p-4",children:[Object(a.jsx)("div",{className:"text-xl font-bold mb-5",children:"Display values"}),Object(a.jsxs)("p",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"Name: "}),o.name]}),Object(a.jsxs)("p",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"Country: "}),o.country]}),Object(a.jsxs)("p",{className:"mb-2",children:[Object(a.jsx)("strong",{children:"Color: "}),o.color]})]})]})}))}var H=h("useScrollWithKeys()");function B(){var e=Object(O.useScrollWithKeys)(!0).scrollRef;return Object(a.jsx)(v,Object(b.a)(Object(b.a)({},H),{},{code:'\n    import { useScrollWithKeys } from "super-hooks";\n    \n    const { scrollRef } = useScrollWithKeys(true);\n    \n    return (\n      <div ref={scrollRef}>\n        <div>Row 1</div>\n        <div>Row 2</div>\n        <div>Row 3</div>\n      </div>\n    )\n    ',children:Object(a.jsx)("div",{ref:e,children:["#3273dc","#00d1b2","#ff3860","#363636","#3273dc","#00d1b2","#ff3860","#363636"].map((function(e,t){return Object(a.jsx)("div",{style:{background:e,color:"white",height:300,padding:50},children:t+1})}))})}))}var K=h("useToggleInput()");function L(){var e=Object(O.useToggleInput)((function(){return alert(t)}),"Current Value. Click me to update"),t=e.text,n=e.setText,s=e.edit,r=e.setEdit,o=e.inputRef,c=e.onSave;return Object(a.jsx)(v,Object(b.a)(Object(b.a)({},K),{},{code:'\n    import { useToggleInput } from "super-hooks";\n    \n    const { text, setText, edit, setEdit, inputRef, onSave } = useToggleInput(\n    () => alert(text),\n    "Blanka"\n  );\n\n    return (\n       {edit ? (\n        <form onSubmit={onSave}>\n          <input\n            ref={inputRef}\n            value={text}\n            onChange={(e) => setText(e.target.value)}\n          />\n          <button>Save</button>\n        </form>\n      ) : (\n        <div  onClick={() => setEdit(true)}>\n          {text}\n        </div>\n      )}\n    )\n    ',children:s?Object(a.jsxs)("form",{onSubmit:c,className:"flex",children:[Object(a.jsx)("input",{ref:o,value:t,onChange:function(e){return n(e.target.value)},className:"rounded border-2 border-grey-400 mr-2 p-1"}),Object(a.jsx)("button",{className:"p-1 rounded font-bold bg-blue-600 text-white block",disabled:""===t,children:"Save"})]}):Object(a.jsx)("div",{className:"cursor-pointer",onClick:function(){return r(!0)},children:t})}))}var A=function(){return Object(a.jsxs)("div",{className:"bg-gray-100",children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{className:"p-4 ",children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(p,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/firstRender",component:w}),Object(a.jsx)(l.a,{path:"/initialFocus",component:y}),Object(a.jsx)(l.a,{path:"/windowWidth",component:W}),Object(a.jsx)(l.a,{path:"/scrollToBottom",component:R}),Object(a.jsx)(l.a,{path:"/showHideElement",component:D}),Object(a.jsx)(l.a,{path:"/stateObject",component:E}),Object(a.jsx)(l.a,{path:"/scrollWithKeys",component:B}),Object(a.jsx)(l.a,{path:"/toggleInput",component:L}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:m}),Object(a.jsx)(l.a,{path:"*",component:m})]})]})})]})};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))},64:function(e,t,n){}},[[323,1,2]]]);
//# sourceMappingURL=main.52191648.chunk.js.map