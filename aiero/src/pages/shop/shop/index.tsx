import { Link } from "react-router-dom";

import {
  shopBestProducts,
  shopProducts,
  shopSidebarServices,
  shopTags,
} from "@/data/shop";
import PriceFilter from "@/components/shop/PriceFilter";
import Pagination from "@/components/common/Pagination";
import AddToCartButton from "@/components/shop/AddToCartButton";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("shop");

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
              <h1 className="title">/ Products /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Products</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* shop-sec */}
        <div className="shop-sec ibt-section-gap">
          <button className="sidebar-toggle" />
          {/* Overlay */}
          <div className="sidebar-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="shop-product">
                  <div className="row">
                    {shopProducts.map((product) => {
                      const contentClassName =
                        product.contentClassName ?? "shop-content";

                      return (
                        <div
                          key={product.id}
                          className="col-xl-4 col-lg-6 col-md-6"
                        >
                          <div className={product.cardClassName ?? "shop-card"}>
                            <div className="shop-img">
                              <Link to={`/shop-single`}>
                                <img
                                  alt="AI Agency & Technology HTML Template"
                                  src={product.imageSrc}
                                  width={product.imageWidth}
                                  height={product.imageHeight}
                                />
                              </Link>
                              {product.badgeText ? (
                                <span
                                  className={product.badgeClassName ?? "tag"}
                                >
                                  {product.badgeText}
                                </span>
                              ) : null}
                              <div className="shop-shap" />
                            </div>
                            <div className={contentClassName}>
                              <AddToCartButton productId={product.id} />
                              <h4 className="title">
                                <Link to={`/shop-single`} title="">
                                  {product.title}
                                </Link>
                              </h4>
                              {product.oldPrice ? (
                                <span className="price v2">
                                  / <del>$ {product.oldPrice} -</del>
                                  <span>$ {product.price}</span> /
                                </span>
                              ) : (
                                <span className="price">
                                  / $ {product.price} /
                                </span>
                              )}
                              {product.rating ? (
                                <ul className="rating">
                                  {Array.from({ length: product.rating }).map(
                                    (_, index) => (
                                      <li key={index}>
                                        <i className="fa fa-star" />
                                      </li>
                                    ),
                                  )}
                                </ul>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Pagination
                    totalPages={3}
                    currentPage={1}
                    basePath="/shop"
                    ulClassName="pagination v2"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="side-bar2">
                  <button className="sidebar-close" />
                  <div className="ser-widget side-widget2">
                    {shopSidebarServices.map((service, index) => (
                      <Link
                        key={service}
                        to={`/service-single`}
                        title=""
                        className={
                          index === shopSidebarServices.length - 1
                            ? "mb-0"
                            : undefined
                        }
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                  <div className="price-filter-widget side-widget2">
                    <h4 className="side-bar-title">Filter by pricing</h4>
                    <PriceFilter />
                  </div>
                  <div className="post-widget side-widget2">
                    <h4 className="side-bar-title">Best products</h4>
                    {shopBestProducts.map((product, index) => (
                      <div
                        key={product.id}
                        className={`recent-post2${
                          index === shopBestProducts.length - 1 ? " mb-0" : ""
                        }`}
                      >
                        <Link to={`/shop-single`}>
                          <img
                            alt="AI Agency & Technology HTML Template"
                            src={product.imageSrc}
                            width={product.imageWidth}
                            height={product.imageHeight}
                          />
                        </Link>
                        <h4 className="title">
                          <Link to={`/shop-single`} title="">
                            {product.title}
                          </Link>
                        </h4>
                        <ul className="rating">
                          {Array.from({ length: product.rating }).map(
                            (_, starIndex) => (
                              <li key={starIndex}>
                                <i className="fa fa-star" />
                              </li>
                            ),
                          )}
                        </ul>
                        <span className="sub-title">/ $ {product.price} /</span>
                      </div>
                    ))}
                  </div>
                  <div className="tag-list-widget side-widget2">
                    <h4 className="side-bar-title">Tags</h4>
                    <ul className="tag-list">
                      {shopTags.map((tag) => (
                        <li key={tag}>
                          <a href="#" title="">
                            / {tag} /
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End shop-sec */}
      </>
    </>
  );
}
