import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Nav2 from "./Nav2";
import SearchToggler from "../common/SearchToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";
export default function Header2({
  className = "vs-header13",
  stickyClass = "sticky-active v13 is-sticky",
}: {
  className?: string;
  stickyClass?: string;
}) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setIsSticky(window.scrollY > 100);
      });
    };
  }, []);
  return (
    <header className={` ${isSticky ? stickyClass : className}`}>
      <div className="container2 position-relative">
        <div className="header-menu-area3">
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <Link to={`/index1`}>
                  <img
                    alt="logo"
                    src="/assets/images/logo.svg"
                    width={110}
                    height={20}
                  />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu menu-style1">
                <ul>
                  <Nav2 />
                </ul>
              </nav>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="btn-box">
                <SearchToggler />
              </div>
            </div>
          </div>
          <MobileMenuToggler />
        </div>
      </div>
    </header>
  );
}
