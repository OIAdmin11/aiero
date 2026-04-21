import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileMenuToggler from "../common/MobileMenuToggler";
import { siteConfig } from "@/data/site";

export default function Header1({
  className = "vs-header",
  stickyClass = "sticky-active is-sticky",
  hasLogin = false,
  menuClass = "header-menu-area",
  stickyMenuClass = "",
  navClass = "menu-style1",
  hasNumber = false,
}: {
  className?: string;
  stickyClass?: string;
  hasLogin?: boolean;
  menuClass?: string;
  stickyMenuClass?: string;
  navClass?: string;
  hasNumber?: boolean;
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
    <header className={` $ ${isSticky ? stickyClass : className}`}>
      <div className={isSticky ? "" : "container2 position-relative"}>
        <div className={isSticky ? stickyMenuClass || menuClass : menuClass}>
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto col">
              <div className="header-logo">
                <Link to={`/`}>
                  <img
                    alt={`${siteConfig.name} logo`}
                    src="/assets/images/logo.svg"
                    width={110}
                    height={20}
                  />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <nav className={`main-menu ${navClass}`}>
                <ul>
                  <Nav />
                </ul>
              </nav>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="btn-box">
                {hasNumber && (
                  <a
                    href={`tel:${siteConfig.primaryPhoneHref}`}
                    title=""
                    className="header-contact11"
                  >
                    {siteConfig.primaryPhoneLabel}
                  </a>
                )}
                {hasLogin && (
                  <a
                    href={siteConfig.loginUrl}
                    title=""
                    className="login-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-user"></i>Login
                  </a>
                )}
              </div>
            </div>
          </div>
          <MobileMenuToggler />
        </div>
      </div>
      {/*vs-main-menu-wrapper end*/}
    </header>
  );
}
