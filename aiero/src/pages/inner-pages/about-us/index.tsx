import { Link } from "react-router-dom";

import Brands from "@/components/homes/home-1/Brands";
import TeamSection from "@/components/homes/home-11/TeamSection";
import Services from "@/components/others-pages/Services";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("about-us");

  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner11">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Aiero</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ About us /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>About us</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* about-us-sec9 */}
        <section className="about-us-sec9 ibt-section-gap">
          <div className="container">
            <div className="title-area">
              <div className="sec-title">
                <SubTitleWrapper>about</SubTitleWrapper>
                <TitleSplitWrapper tag="h-2" className="title animated-heading">
                  Awesome things in working with Aiero WordPress theme
                </TitleSplitWrapper>
              </div>
              <div className="anim-img2">
                <img
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/cross1-1.png"
                  width={143}
                  height={49}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content9">
                  <h4 className="title">Aiero</h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-info9">
                  <p>
                    At XXLando, we are a leading AI services provider dedicated
                    to delivering innovative solutions that leverage artificial
                    intelligence to transform businesses.
                  </p>
                  <p>
                    Our team of experts specializes in cutting-edge AI
                    technologies, offering customized strategies and
                    implementations to help you stay ahead in today&apos;s
                    data-driven world. Unlock the full potential of AI with
                  </p>
                  <p className="mb-0">
                    XXLando, your trusted partner in the future of intelligent
                    technology stay ahead in today&apos;s data-driven world.
                    Unlock the full potential of AI with XXLando, your trusted
                    partner in the future of intelligent technology stay ahead
                    in today&apos;s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End about-us-sec9 */}
        {/* marquee-sec */}
        <section className="marquee-sec ibt-section-gapBottom">
          <h2 style={{ display: "none" }}>Marquee Section</h2>
          <div className="marquee">
            <div className="marquee-inner">
              <span>
                / Neural Networks in shaping the future of technology.
              </span>
              <span>
                / Neural Networks in shaping the future of technology.
              </span>
            </div>
          </div>
        </section>
        {/* End marquee-sec */}
        {/* service-sec22 */}
        <Services />
        {/* End service-sec22 */}
        {/* neural-playground */}
        <Brands />
        {/* End neural-playground */}
        {/* team-section */}
        <TeamSection parentClass="team-section v2 ibt-section-gapBottom" />
        {/* End team-section */}
      </>
    </>
  );
}
