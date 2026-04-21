import { Link } from "react-router-dom";
import CheckoutSection from "@/components/shop/CheckoutSection";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("checkout");

  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner5">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Shop</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Checkout /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Checkout</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* checkout-sec */}
        <CheckoutSection />
        {/* End account-sec */}
      </>
    </>
  );
}
