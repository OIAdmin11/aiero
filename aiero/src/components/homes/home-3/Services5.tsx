import VideoPopupButton from "@/components/common/VideoPopupButton";

import Counter from "@/components/common/Counter";

export default function Services5() {
  return (
    <section className="service-sec5">
      <div className="container2">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="ser-card5">
              <img
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser5-1.png"
                width={623}
                height={599}
              />
              <div className="ser-content5">
                <div className="ser-text3">
                  <a href="#" title="">
                    AI Solutions
                  </a>
                  <a href="#" title="">
                    AI Services
                  </a>
                </div>
                <h4 className="title">Empowering your business with AI</h4>
                <p>
                  Instant assistance for all your queries. Experience seamless
                  service with our AI-powered support
                </p>
                <a href="#" title="" className="ser-btn3">
                  Explore more
                </a>
                <div className="ser-team-info v2">
                  <div className="auther-img">
                    <img
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/event/auther1.png"
                      width={58}
                      height={58}
                    />
                    <img
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/event/auther2.png"
                      width={58}
                      height={58}
                    />
                  </div>
                  <ul className="rating">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <span>20K+ users</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-12">
            <div className="ser-card5 v2">
              <img
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser5-2.png"
                width={1241}
                height={599}
              />
              <div className="ser-counter">
                <div className="counter-box6">
                  <Counter max={500} extraClass="percent-counter" />
                  <span className="counter-text">+</span>
                </div>
                <span className="title">Team members</span>
              </div>
              <h4 className="profection">Professional team members</h4>
              <div className="ser-video-box">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" /> Watch Video
                </VideoPopupButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
