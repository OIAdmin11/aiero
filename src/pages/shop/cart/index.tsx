import { Link } from "react-router-dom";
import CartSection from "@/components/shop/CartSection";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("cart");

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
              <h1 className="title">/ Shopping cart /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Shopping cart</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* cart-sec */}
        <CartSection />
        {/* End cart-sec */}
      </>
    </>
  );
}
