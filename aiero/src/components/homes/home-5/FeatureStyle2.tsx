import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { featureItemsStyle2 } from "@/data/features";

export default function FeatureStyle2() {
  return (
    <section className="feature-sec2 ibt-section-gap">
      <div className="container">
        <div className="sec-title feture5">
          <SubTitleWrapper>features</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Empower &amp; elevate with next-gen AI features Aiero Startup
          </TitleSplitWrapper>
        </div>
        <div className="row">
          {featureItemsStyle2.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className={item.cardClassName ?? "feature-card"}>
                <img
                  alt="AI Agency & Technology HTML Template"
                  src={item.imageSrc}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  className="image-auto"
                />
                <h4 className="title">
                  <Link to="/service-single" title="">
                    {item.title}
                  </Link>
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
