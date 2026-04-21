import { Link } from "react-router-dom";

import { featureItemsStyle2 } from "@/data/features";
import { servicesSectionHref } from "@/data/site";

export default function Features() {
  return (
    <section className="feature-sec2 iibt-section-gapBottom">
      <div className="container">
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
                  <Link to={servicesSectionHref} title={item.title}>
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
