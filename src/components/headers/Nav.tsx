import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { mobileMenuItems } from "@/data/mobileMenu";
import type { MobileMenuItem } from "@/types/menu";
import { itemHasActiveDescendant } from "@/utils/menuActive";

function renderDesktopItems(pathname: string, items: MobileMenuItem[]) {
  return items.map((item) => {
    const href = item.href ?? "#";
    const hasChildren = Boolean(item.children?.length);
    const isActive = itemHasActiveDescendant(pathname, item);
    const isInternalLink = href.startsWith("/");

    const label = (
      <>
        <span className="menu-item">{item.label}</span>
        <span className="menu-item2">{item.label}</span>
      </>
    );

    return (
      <li
        key={item.label}
        className={
          hasChildren
            ? isActive
              ? "menu-has-items menu-item-has-children active"
              : "menu-has-items menu-item-has-children"
            : isActive
              ? "active"
              : undefined
        }
      >
        {isInternalLink ? (
          <Link to={href} className={isActive ? "active" : undefined}>
            {label}
          </Link>
        ) : (
          <a
            href={href}
            className={isActive ? "active" : undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        )}

        {hasChildren && (
          <ul className="sub-menu">
            {item.children?.map((child) => {
              const childHref = child.href ?? "#";
              const childIsInternal = childHref.startsWith("/");
              const childIsActive = itemHasActiveDescendant(pathname, child);
              return (
                <li
                  key={child.label}
                  className={childIsActive ? "active" : undefined}
                >
                  {childIsInternal ? (
                    <Link
                      to={childHref}
                      className={childIsActive ? "active" : undefined}
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <a
                      href={childHref}
                      className={childIsActive ? "active" : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {child.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  });
}

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <>{renderDesktopItems(pathname, mobileMenuItems)}</>
  );
}
