import { Outlet, useLocation } from "react-router-dom";

import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";

/** Shared shell: header + routed page + contact + footer (matches Next.js `(inner-pages)` layout). */
export default function ShellLayout() {
  const { pathname } = useLocation();
  const isContactPage = pathname === "/contact";

  return (
    <>
      <Header4
        className="vs-header15"
        menuClass="header-menu-area"
        headerBottomClass="header-bottom15"
        navClass="main-menu menu-style1"
      />
      <Outlet />
      <section className="main-sec">
        {!isContactPage && <Contact />}
        <Footer1 />
      </section>
    </>
  );
}
