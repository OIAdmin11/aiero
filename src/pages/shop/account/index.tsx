import { Link } from "react-router-dom";
import AccountSection from "@/components/shop/AccountSection";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("account");

  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Shop</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Account /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>My account</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* account-sec */}
        <AccountSection />
        {/* End account-sec */}
      </>
    </>
  );
}
