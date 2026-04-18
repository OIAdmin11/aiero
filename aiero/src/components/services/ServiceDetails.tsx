import { Link } from "react-router-dom";

import Faqs from "./Faqs";
import Pricing from "./Pricing";
import SubTitleWrapper from "../common/SubTitleWrapper";

export default function ServiceDetails() {
  return (
    <section className="service-single-sec ibt-section-gapTop">
      <button className="sidebar-toggle" />
      {/* Overlay */}
      <div className="sidebar-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="side-bar2">
              <button className="sidebar-close" />
              <div className="ser-widget side-widget">
                <Link to={`/service-single`} title="">
                  Network Integration
                </Link>
                <Link to={`/service-single`} title="">
                  Deep learning solutions
                </Link>
                <Link to={`/service-single`} title="">
                  Transfer learning
                </Link>
                <Link to={`/service-single`} title="">
                  Model evaluation
                </Link>
                <Link to={`/service-single`} title="">
                  Real-time prediction
                </Link>
              </div>
              <div className="brochure-widget side-widget">
                <SubTitleWrapper>/ download /</SubTitleWrapper>
                <h4 className="title">Services brochure</h4>
                <a href="#" className="ibt-btn ibt-btn-outline">
                  <span>Download</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
              <div className="strategy-widget side-widget">
                <img
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/shades.png"
                  width={304}
                  height={385}
                />
                <div className="strategy-content">
                  <h4 className="title">AI Strategy and Consulting</h4>
                  <p>Provide expert guidance on developing an AI strategy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="ser-detail">
              <h2 className="title animated-heading">
                Neural networks are a fundamental component of Artificial
                Intelligence (AI) systems
              </h2>
              <p>
                Integrating neural network models into existing systems or
                software applications, enabling businesses to leverage AI
                capabilities seamlessly.
              </p>
              <p className="paragraph">
                In today&apos;s fast-paced and data-driven world, businesses are
                constantly seeking innovative ways to gain a competitive edge,
                make smarter decisions, and deliver exceptional customer
                experiences. One technology that is transforming industries
                across the globe is neural networks. Harnessing the power of
                artificial intelligence, neural networks have the ability to
                analyze vast amounts of data, identify complex patterns, and
                make accurate predictions, enabling businesses to unlock new
                opportunities and drive growth.
              </p>
              <img
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser-detal.png"
                width={989}
                height={642}
              />
              <p className="paragraph">
                In today&apos;s fast-paced and data-driven world, businesses are
                constantly seeking innovative ways to gain a competitive edge,
                make smarter decisions, and deliver exceptional customer
                experiences. One technology that is transforming industries
                across the globe is neural networks. Harnessing the power of
                artificial intelligence, neural networks have the ability to
                analyze vast amounts of data, identify complex patterns, and
                make accurate predictions, enabling businesses to unlock new
                opportunities and drive growth.
              </p>
              <ul className="ser-detail-list">
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Pacific hake false trevally queen parrotfish black
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Prickleback moss revally queen parrotfish black
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Queen parrotfish black prickleback moss pacific
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Hake false trevally queen
                </li>
              </ul>
              {/* pricing-sec */}
              <Pricing />
              {/* End pricing-sec */}
              {/* faq-sec */}
              <div className="faq-sec4 ibt-section-gapBottom">
                <div className="faq-content4">
                  <div className="sec-title">
                    <SubTitleWrapper>faq</SubTitleWrapper>
                    <h2 className="title animated-heading">
                      Open questions from our customers
                    </h2>
                  </div>
                  <Faqs />
                </div>
              </div>
              {/* End faq-sec */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
