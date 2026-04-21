import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function Features2() {
  return (
    <section className="choose-us-sec">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="choose-img">
            <img
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/event/choose.png"
              width={713}
              height={1062}
            />
            <img
              alt="AI Agency & Technology HTML Template"
              className="logo4"
              src="/assets/images/logo4.svg"
              width={203}
              height={37}
            />
            <div className="video-box3">
              <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                <i className="fa fa-play" /> Watch Video
              </VideoPopupButton>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose-content">
            <div className="sec-title white">
              <SubTitleWrapper>what we do</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                Embrace the power of artificial intelligence today
              </TitleSplitWrapper>
              <p>
                AI strategies that drive innovation, optimize processes, and
                unlock new opportunities for growth..
              </p>
              <p>
                AIERO empowers organizations to thrive in the digital age with
                intelligent, scalable, and sustainable solutions. Partner with
                us to navigate the future of technology and achieve unparalleled
                business success.
              </p>
            </div>
            <div className="choose-list-box">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul className="choose-list">
                    <li>
                      <i className="fa fa-check" />
                      Fine-tuning models
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Embedding models
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      InstructGPT
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <ul className="choose-list">
                    <li>
                      <i className="fa fa-check" />
                      Artificial intelligence
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Chat bots
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      MidJourney
                    </li>
                  </ul>
                </div>
              </div>
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
    </section>
  );
}
