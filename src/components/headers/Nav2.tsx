import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import ThemeTrigger from "@/components/common/ThemeTrigger";
import { mobileMenuItems } from "@/data/mobileMenu";
import type { MobileMenuItem } from "@/types/menu";
import { isLinkActive, itemHasActiveDescendant } from "@/utils/menuActive";

const nav2FallbackShop: MobileMenuItem = {
  label: "Shop",
  href: "/shop",
  children: [],
};
const nav2FallbackBlog: MobileMenuItem = {
  label: "Blog",
  href: "/blog",
  children: [],
};

export default function Nav2() {
  const { pathname } = useLocation();

  const homeSection = mobileMenuItems[0];
  const pagesSection = mobileMenuItems[1];
  const shopSection = mobileMenuItems[3] ?? nav2FallbackShop;
  const blogSection = mobileMenuItems[4] ?? nav2FallbackBlog;
  const contactItem =
    mobileMenuItems[5] ??
    mobileMenuItems[2] ??
    ({ label: "Contact", href: "/contact" } satisfies MobileMenuItem);

  const isHomeActive = itemHasActiveDescendant(pathname, homeSection);
  const isPagesActive = itemHasActiveDescendant(pathname, pagesSection);
  const isShopActive = itemHasActiveDescendant(pathname, shopSection);
  const isBlogActive = itemHasActiveDescendant(pathname, blogSection);
  const isContactActive = isLinkActive(pathname, contactItem.href);

  return (
    <>
      <li className={isHomeActive ? "menu-has-items active" : "menu-has-items"}>
        <Link to="/" className={isHomeActive ? "active" : undefined}>
          <span className="menu-item">{homeSection.label}</span>
          <span className="menu-item2">{homeSection.label}</span>
        </Link>
        <ul className="mega-sub-menu">
          <li className="mega-menu-column">
            <ul>
              {homeSection.children?.slice(0, 9).map((child) => {
                const isChildActive = isLinkActive(pathname, child.href);
                return (
                  <li
                    key={child.label}
                    className={isChildActive ? "active" : undefined}
                  >
                    <Link
                      to={child.href!}
                      className={isChildActive ? "active" : undefined}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {homeSection.children?.slice(9).map((child) => {
                const isChildActive = isLinkActive(pathname, child.href);
                return (
                  <li
                    key={child.label}
                    className={isChildActive ? "active" : undefined}
                  >
                    <Link
                      to={child.href!}
                      className={isChildActive ? "active" : undefined}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="mega-menu-column">
            <ThemeTrigger>
              <Link to="/index1" className="darkModeTriggerImg">
                <img
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/dark-version.png"
                  width={377}
                  height={351}
                />
              </Link>
            </ThemeTrigger>
            <ThemeTrigger>
              <Link to="/index1" className="darkModeTriggerImg2">
                <img
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/light-version.png"
                  width={377}
                  height={351}
                />
              </Link>
            </ThemeTrigger>
          </li>
        </ul>
      </li>
      <li
        className={
          isPagesActive
            ? "menu-has-items menu-item-has-children active"
            : "menu-has-items menu-item-has-children"
        }
      >
        <a href="#" className={isPagesActive ? "active" : undefined}>
          <span className="menu-item">{pagesSection.label}</span>
          <span className="menu-item2">{pagesSection.label}</span>
        </a>
        <ul className="sub-menu">
          {pagesSection.children?.map((child) => {
            if (child.children && child.children.length > 0) {
              const isTeam = child.label.toLowerCase() === "team";
              const subClass = isTeam ? "sub-menu v1" : "sub-menu v2";
              const isChildActive = itemHasActiveDescendant(pathname, child);
              return (
                <li
                  key={child.label}
                  className={
                    isChildActive ? "menu-has-items active" : "menu-has-items"
                  }
                >
                  <Link
                    to={child.href ?? "#"}
                    className={isChildActive ? "active" : undefined}
                  >
                    {child.label}
                  </Link>
                  <ul className={subClass}>
                    {child.children.map((sub) => {
                      const isSubActive = isLinkActive(pathname, sub.href);
                      return (
                        <li
                          key={sub.label}
                          className={isSubActive ? "active" : undefined}
                        >
                          <Link
                            to={sub.href!}
                            className={isSubActive ? "active" : undefined}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            const isChildActive = isLinkActive(pathname, child.href);
            return (
              <li
                key={child.label}
                className={isChildActive ? "active" : undefined}
              >
                <Link
                  to={child.href!}
                  className={isChildActive ? "active" : undefined}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className="logo3">
        <Link to="/index1">
          <img
            alt="logo"
            src="/assets/images/logo.svg"
            width={110}
            height={20}
          />
        </Link>
      </li>
      <li>
        <Link
          to={shopSection.children?.[0].href ?? "/shop"}
          className={isShopActive ? "active" : undefined}
        >
          <span className="menu-item">{shopSection.label}</span>
          <span className="menu-item2">{shopSection.label}</span>
        </Link>
        <ul className="sub-menu">
          {shopSection.children?.map((child) => {
            const isChildActive = isLinkActive(pathname, child.href);
            return (
              <li
                key={child.label}
                className={isChildActive ? "active" : undefined}
              >
                <Link
                  to={child.href!}
                  className={isChildActive ? "active" : undefined}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <Link
          to={blogSection.children?.[0].href ?? "/blog"}
          className={isBlogActive ? "active" : undefined}
        >
          <span className="menu-item">{blogSection.label}</span>
          <span className="menu-item2">{blogSection.label}</span>
        </Link>
        <ul className="sub-menu">
          {blogSection.children?.map((child) => {
            const isChildActive = isLinkActive(pathname, child.href);
            return (
              <li
                key={child.label}
                className={isChildActive ? "active" : undefined}
              >
                <Link
                  to={child.href!}
                  className={isChildActive ? "active" : undefined}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <Link
          to={contactItem.href ?? "/contact"}
          className={isContactActive ? "active" : undefined}
        >
          <span className="menu-item">{contactItem.label}</span>
          <span className="menu-item2">{contactItem.label}</span>
        </Link>
      </li>
    </>
  );
}
