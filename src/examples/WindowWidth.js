import React from "react";
import { useWindowWidth } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
import { useWindowWidth } from "super-hooks";
    
const { 
  screenWidth, 
  isMobile, 
  isTablet, 
  isDesktop, 
  isDesktopLarge } = useWindowWidth(600, 1000, 1300, 1500);

  return (
    <div>
      <p>The screen width is: {screenWidth}</p>

      // Only show to messaage to mobile users 
      {isMobile && <p>Hello mobile user</p>}

      // Only show to messaage to users using a desktop computer 
      {!isTablet && <p>Hello desktop user</p>}

    </div>
  )
    `;

const Details = () => (
  <ul className="mx-4">
    <li className="list-disc mb-4">
      The hook returns the following values:{" "}
      <strong>screenWith, isMobile, isTablet, isDesktop</strong> and
      <strong> isDesktopLarge</strong>.
    </li>
    <li className="list-disc mb-4">
      <strong>screenWidth</strong> is always set to window.innerWidth so returns
      a number value which is pixels.
    </li>
    <li className="list-disc mb-4">
      <strong>isMobile</strong> and other values are booleans which return true
      when the <strong>screenWidth</strong> is less than a number which is
      mapped to that value. For example, <strong>isDesktop</strong> = true when
      <strong> screenWidth</strong> is less than 1280px.
    </li>
    <li className="list-disc mb-4">
      If you do not pass any values to the hook it will by default map the
      following values:
    </li>
    <div className="ml-4 mb-4">
      <li className="mb-2">
        <strong>isMobile:</strong> screenWidth &#60; 700px
      </li>
      <li className="mb-2">
        <strong>isTablet:</strong> screenWidth &#60; 1024px
      </li>
      <li className="mb-2">
        <strong>isDesktop:</strong> screenWidth &#60; 1280px
      </li>
      <li className="mb-2">
        <strong>isDesktopLarge:</strong> screenWidth &#60; 1536px
      </li>
    </div>
    <li className="list-disc mb-4">
      However, you can set your own breakpoints by passing four number values to
      the hook. In the below example <strong>isMobile</strong> is now true when
      the screenWidth is less than 600px.
    </li>
  </ul>
);

const hook = getHook("useWindowWidth()");

export default function WindowWidth() {
  const { screenWidth, isMobile, isTablet, isDesktop, isDesktopLarge } =
    useWindowWidth();
  return (
    <Hook {...hook} details={Details} code={code}>
      <div>
        <p className="mb-2">
          <strong>Screen width: </strong>
          {screenWidth}
        </p>
        <div className="flex flex-wrap"></div>
        <strong
          style={{ color: isMobile ? "green" : "red" }}
          className="mr-4 mb-2"
        >
          isMobile
        </strong>
        <strong
          style={{ color: isTablet ? "green" : "red" }}
          className="mr-4 mb-2"
        >
          isTablet
        </strong>
        <strong
          style={{ color: isDesktop ? "green" : "red" }}
          className="mr-4 mb-2"
        >
          isDesktop
        </strong>
        <strong
          style={{ color: isDesktopLarge ? "green" : "red" }}
          className="mr-4 mb-2"
        >
          isDesktopLarge
        </strong>
      </div>
    </Hook>
  );
}
