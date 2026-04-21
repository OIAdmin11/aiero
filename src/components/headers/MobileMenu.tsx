import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useUi } from "@/context/UiContext";
import { mobileMenuItems } from "@/data/mobileMenu";
import { siteConfig } from "@/data/site";
import type { MobileMenuItem } from "@/types/menu";
import { itemHasActiveDescendant } from "@/utils/menuActive";

type OpenItemsState = Set<string>;

function renderMenuItems(
  items: MobileMenuItem[],
  parentKey: string,
  openItems: OpenItemsState,
  toggleItem: (key: string) => void,
  pathname: string,
) {
  return items.map((item, index) => {
    const itemKey = parentKey ? `${parentKey}-${index}` : `${index}`;
    const hasChildren =
      Array.isArray(item.children) && item.children.length > 0;
    const isOpen = openItems.has(itemKey);
    const isActive = itemHasActiveDescendant(pathname, item);
    // Only use "active" on li for expand/collapse (isOpen). Use "current" for
    // current-page highlight so the submenu can collapse when openItems is toggled off.
    const liClassName =
      [
        item.liClassName,
        isOpen ? "active" : undefined,
        isActive ? "current" : undefined,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const href = item.href ?? "#";
    const isInternalLink = href.startsWith("/");

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    ) => {
      if (hasChildren) {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(itemKey);
      }
    };

    const linkClassName = isActive ? "active" : undefined;

    const labelContent = isInternalLink ? (
      <Link to={href} onClick={handleClick} className={linkClassName}>
        {item.label}
      </Link>
    ) : (
      <a href={href} onClick={handleClick} className={linkClassName}>
        {item.label}
      </a>
    );

    return (
      <li key={item.label} className={liClassName}>
        {labelContent}
        {hasChildren && (
          <ul className={isOpen ? "active" : undefined}>
            {renderMenuItems(
              item.children!,
              itemKey,
              openItems,
              toggleItem,
              pathname,
            )}
          </ul>
        )}
      </li>
    );
  });
}

export default function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useUi();
  const [openItems, setOpenItems] = useState<OpenItemsState>(new Set());
  const { pathname } = useLocation();

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <>
      <div className={`side-menu2 ${mobileMenuOpen ? "active" : ""}`}>
        <div className="menu-btns">
          <button
            id="mobileCloseBtn2"
            className="close-btn"
            onClick={closeMobileMenu}
          />
        </div>
        <ul>
          {renderMenuItems(
            mobileMenuItems,
            "root",
            openItems,
            toggleItem,
            pathname,
          )}
        </ul>
        <div className="menu-contact">
          <span>Contacts</span>
          <a
            href={`tel:${siteConfig.primaryPhoneHref}`}
            className="nmbr"
            title=""
          >
            {siteConfig.primaryPhoneLabel}
          </a>
          <a href={`mailto:${siteConfig.primaryEmail}`} title="" className="gmail">
            {siteConfig.primaryEmail}
          </a>
        </div>
        <div className="menu-links">
          {/* Follow us (hidden for now)
          <span>Follow us:</span>
          <ul className="social-icon">
            <li>
              <a href={siteConfig.url} title="">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href={siteConfig.url} title="">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href={siteConfig.url} title="">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href={siteConfig.url} title="">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          */}
          <a
            href={siteConfig.loginUrl}
            title=""
            className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Login</span>
          </a>
        </div>
      </div>

      <div
        className={`overlay2 ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      />
    </>
  );
}
