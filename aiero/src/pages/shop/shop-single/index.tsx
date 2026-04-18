import { Link } from "react-router-dom";

import ShopSingleProduct from "@/components/shop/ShopSingleProduct";
import ShopSimilarProducts from "@/components/shop/ShopSimilarProducts";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("shop-single");

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
              <h1 className="title">/ White GRT Hoody /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Services</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* shop-sec2 */}
        <ShopSingleProduct />
        {/* End shop-sec2 */}
        {/* shop-sec */}
        <ShopSimilarProducts />
        {/* End shop-sec */}
      </>
    </>
  );
}
