import React from "react";
import { useTransitionNavigate } from "../useTransitionNavigate";

const Header = (props: { current: string }) => {
  const { transitionNavigate } = useTransitionNavigate();
  const darken = props.current === "/gallery";
  return (
    <div className="headerTop" style={{
        viewTransitionName: "header",
        backgroundColor: darken ? "rgba(0,0,0,0.9)" : ""
    }}>
      <div className="headerSecond">
        <div className="row">
          <div className="headerThird">
            <nav className="headerNav">
              {props.current === "/" ? (
                <ul className="headerUL">
                  <li>
                    <button className="headerA" onClick={() => transitionNavigate("/")}>
                      Home
                    </button>
                  </li>
                  <li>
                    <button className="headerA2" onClick={() => transitionNavigate("/about", "slide-to-left")}>
                      About
                    </button>
                  </li>
                  <li>
                    <button className="headerA2" onClick={() => transitionNavigate("/gallery", "slide-to-left")}>
                      Gallery
                    </button>
                  </li>
                </ul>
              ) : props.current === "/about" ? (
                <ul className="headerUL">
                  <li>
                    <button className="headerA2" onClick={() => transitionNavigate("/", "slide-to-right")}>
                      Home
                    </button>
                  </li>
                  <li>
                    <button className="headerA" onClick={() => transitionNavigate("/about")}>
                      About
                    </button>
                  </li>
                  <li>
                    <button className="headerA2" onClick={() => transitionNavigate("/gallery", "slide-to-left")}>
                      Gallery
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="headerUL">
                  <li>
                    <button className="headerA2" onClick={() => transitionNavigate("/", "slide-to-right")}>
                      Home
                    </button>
                  </li>
                  <li>
                    <button className="headerA2" onClick={() => transitionNavigate("/about", "slide-to-right")}>
                      About
                    </button>
                  </li>
                  <li>
                    <button className="headerA" onClick={() => transitionNavigate("/gallery")}>
                      Gallery
                    </button>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
