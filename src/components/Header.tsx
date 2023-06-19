import React from "react";

const Header = (props: { current: string }) => {
  return (
    <div className="headerTop">
      <div className="headerSecond">
        <div className="row">
          <div className="headerThird">
            <nav className="headerNav">
              {props.current === "Home" ? (
                <ul className="headerUL">
                  <li>
                    <a className="headerA" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="headerA2" href="/gallery">
                      Gallery
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="headerUL">
                  <li>
                    <a className="headerA2" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="headerA" href="/gallery">
                      Gallery
                    </a>
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
