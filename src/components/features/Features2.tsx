import { featureItems10 } from "@/data/features";

export default function Features2() {
  return (
    <>
      {featureItems10.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
          <div className="feature-card10">
            <img
              alt="AI Agency & Technology HTML Template"
              src={item.iconSrc}
              width={item.iconWidth}
              height={item.iconHeight}
              className="image-auto"
            />
            <h4 className="title">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
