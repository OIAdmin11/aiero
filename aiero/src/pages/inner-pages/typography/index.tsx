import { Link } from "react-router-dom";

import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("typography");

  return (
    <>
      <>
        {/* page-banner */}
        <section className="page-banner3">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Neural</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Typography /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Typography</li>
          </ul>
        </section>
        {/* End page-banner */}
        {/* Typography-sec */}
        <section className="typography-sec ibt-section-gap">
          <div className="container">
            <div className="typography-content">
              <h1>Heading H1 - 80px</h1>
              <h2>Heading H2 - 60px</h2>
              <h3>Heading H3- 40px</h3>
              <h4>Heading H4- 25px</h4>
              <h5>Heading H5- 20px</h5>
              <p>
                Triggerfish bluntnose knifefish upside-down catfish kfish
                convict cichlid cat shark saw shark trout cod.
              </p>
              <p>
                Pacific hake false trevally queen parrotfish black prickleback
                moss revally queen parrotfish black prickleback moss. Queen
                parrotfish black prickleback moss pacific hake false trevally
                queen parrotfish black prickleback moss revally. Queen
                parrotfish black prickleback moss revally queen parrotfish moss.
                Queen parrotfish black prickleback moss pacific hake false
                trevally queen parrotfish black prickleback moss revally
              </p>
              <div className="typography-colum">
                <h2>1/2 Two Columns</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="paragrap">
                      <p>
                        Pacific hake false trevally queen parrotfish black
                        prickleback moss revally queen parrotfish black
                        prickleback moss. Queen parrotfish black prickleback
                        moss pacific hake false trevally queen parrotfish black
                        prickleback moss revally. Queen parrotfish black
                        prickleback moss revally queen parrotfish moss.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="paragrap">
                      <p>
                        Queen parrotfish black prickleback moss pacific hake
                        false trevally queen parrotfish black prickleback moss
                        revally. Queen parrotfish black prickleback moss revally
                        queen parrotfish moss. Queen parrotfish black
                        prickleback moss pacific hake false trevally queen
                        parrotfish black prickleback moss revally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typography-colum">
                <h2>1/3 Three Columns</h2>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="paragrap">
                      <p>
                        Pacific hake false trevally queen parrotfish black
                        prickleback moss revally queen parrotfish black
                        prickleback moss. Queen parrotfish black prickleback
                        moss pacific hake false trevally queen
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="paragrap">
                      <p>
                        Queen parrotfish black prickleback moss pacific hake
                        false trevally queen parrotfish black prickleback moss
                        revally. Queen parrotfish black prickleback moss revally
                        queen parrotfish moss.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="paragrap">
                      <p>
                        Queen parrotfish black prickleback moss pacific hake
                        false trevally queen parrotfish black prickleback moss
                        revally. Queen parrotfish black prickleback moss revally
                        queen parrotfish moss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typography-colum">
                <h2>1/4 Four Columns</h2>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="paragrap">
                      <p>
                        Pacific hake false trevally queen parrotfish black
                        prickleback moss revally queen parrotfish black
                        prickleback moss. Queen parrotfish black prickleback
                        moss pacific hake false trevally queen
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="paragrap">
                      <p>
                        Queen parrotfish black prickleback moss pacific hake
                        false trevally queen parrotfish black prickleback moss
                        revally. Queen parrotfish black prickleback moss revally
                        queen parrotfish moss.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="paragrap">
                      <p>
                        Queen parrotfish black prickleback moss pacific hake
                        false trevally queen parrotfish black prickleback moss
                        revally. Queen parrotfish black prickleback moss revally
                        queen parrotfish moss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <blockquote className="blockquote">
                <p>
                  Our team of experts specializes in cutting-edge AI
                  technologies, offering customized strategies and
                  implementations to help you stay ahead in today&apos;s
                  data-driven world. Unlock the full potential of AI with
                  XXLando, your trusted partner in the future of intelligent
                  technology Queen parrotfish black prickleback moss pacific
                  hake false trevally queen parrotfish black prickleback moss
                  revally. Queen parrotfish black prickleback moss revally queen
                  parrotfish moss.
                </p>
              </blockquote>
              <div className="blockquote2">
                <h2>Blockquotes</h2>
                <blockquote className="m-0">
                  <div className="quote-box">
                    <img
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/icon/comas2.svg"
                      width={52}
                      height={39}
                    />
                    <h4 className="title">
                      Unlock the full potential of AI with XXLando, your trusted
                      partner in the future of intelligent technology Queen
                      parrotfish black prickleback moss pacific hake false
                      trevally queen parrotfish black prickleback moss revally.
                      Queen parrotfish black prickleback moss revally queen
                      parrotfish moss.
                    </h4>
                  </div>
                </blockquote>
              </div>
              <div className="style-list">
                <h2>Style list</h2>
                <div className="list-box">
                  <ul className="ser-detail-list mt-0">
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
                  <ul className="demo-list m-0">
                    <li>
                      <i className="fontello icon-button-arrow-down" />
                      Pacific hake false trevally queen parrotfish black
                    </li>
                    <li>
                      <i className="fontello icon-button-arrow-down" />
                      Prickleback moss revally queen parrotfish black
                    </li>
                    <li className="m-0">
                      <i className="fontello icon-button-arrow-down" />
                      Queen parrotfish black prickleback
                    </li>
                    <li className="m-0">
                      <i className="fontello icon-button-arrow-down" />
                      Moss pacific hake false trevally queen
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Typography-sec */}
      </>
    </>
  );
}
