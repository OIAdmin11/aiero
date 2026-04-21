import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Services2 from "@/components/services/Services2";

export default function Services6() {
  return (
    <section className="service-sec6">
      <div className="title-area">
        <div className="container">
          <div className="row end">
            <div className="col-xl-6 col-lg-12">
              <div className="sec-title mb-0">
                <SubTitleWrapper>services</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Special neural features for your services
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="sec-btn-box">
                <p>We have all the services to help your business</p>
                <Link
                  to={`/service`}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>Explore More</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="row">
          <Services2 />
        </div>
      </div>
    </section>
  );
}
