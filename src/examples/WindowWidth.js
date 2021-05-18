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
  isDesktopLarge } = useWindowWidth(700, 1000, 1280, 1536);

  return (
    <div>
      <p>The screen width is: {screenWidth}</p>

      // Show the below div on devices that are tablet size or above. I have set this to 1000px

      {isTablet && <p>Hello tablet/desktop user</p>}

    </div>
  )
    `;

const hook = getHook("useWindowWidth()");

export default function WindowWidth() {
  const { screenWidth, isMobile, isTablet, isDesktop, isDesktopLarge } =
    useWindowWidth();
  return (
    <Hook {...hook} code={code}>
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
