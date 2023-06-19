import React from "react";

const Header = () => {
  return (
    <div className="headerTop">
      <div className="headerSecond">
        <div className="row">
          <div className="headerThird">
            <nav className="headerNav">
              <ul className="headerUL">
                <li>
                  <a className="headerA cmenu_link" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="headerA2 cmenu_link" href="/gallery">
                    Gallery
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
