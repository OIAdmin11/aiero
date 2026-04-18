import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function Project() {
  return (
    <section className="project-sec2">
      <div className="title-area">
        <div className="container">
          <div className="row end">
            <div className="col-xl-10 col-lg-9">
              <div className="sec-title white mb-0">
                <SubTitleWrapper>projects</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  we kindly invite you to review the outcomes of our dedicated
                  efforts and see the results of our hard work in delivering
                  top-tier solutions
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3">
              <div className="sec-btn-box">
                <Link
                  to={`/project2`}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>More projects</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="project-info2">
          <div className="project-block2">
            <img
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-1.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>Development</SubTitleWrapper>
              <h4 className="title">
                <Link to={`/project-single`} title="">
                  DeepVision: Enhancing Image Recognition with Neural Networks
                </Link>
              </h4>
              <Link to={`/project-single`} title="" className="ser-btn3">
                Explore more
              </Link>
            </div>
          </div>
          <div className="project-block2">
            <img
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-4.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>Development</SubTitleWrapper>
              <h4 className="title">
                <Link to={`/project-single`} title="">
                  NLPGenius: Natural Language Processing Powered by Neural
                  Networks
                </Link>
              </h4>
              <Link to={`/project-single`} title="" className="ser-btn3">
                Explore more
              </Link>
            </div>
          </div>
          <div className="project-block2">
            <img
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-3.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>Development</SubTitleWrapper>
              <h4 className="title">
                <Link to={`/project-single`} title="">
                  AutoDrive: Autonomous Vehicle Navigation with Advanced Neural
                  Networks
                </Link>
              </h4>
              <Link to={`/project-single`} title="" className="ser-btn3">
                Explore more
              </Link>
            </div>
          </div>
          <div className="project-block2 mb-0">
            <img
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/project/project2-4.png"
              width={1790}
              height={320}
            />
            <div className="project-content2">
              <SubTitleWrapper>Development</SubTitleWrapper>
              <h4 className="title">
                <Link to={`/blog-single`} title="">
                  CogniCraft: Smart Solutions, Intelligent Innovation for a
                  Connected Tomorrow
                </Link>
              </h4>
              <a href="#" title="" className="ser-btn3">
                Explore more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
