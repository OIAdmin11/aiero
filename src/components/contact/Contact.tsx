import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <div className="contact-sec ibt-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-content">
              <div className="sec-title white">
                <SubTitleWrapper>get in touch</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Tell us what you are trying to fix—calls, follow-up, or how
                  leads move through your team
                </TitleSplitWrapper>
                <p>
                  Share a bit about your business and what a better first
                  response would look like. We read every message, reply with
                  clear next steps, and route you to the right person when it
                  makes sense.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Call</h4>
                      <a href={`tel:${siteConfig.primaryPhoneHref}`} className="nmbr">
                        {siteConfig.primaryPhoneLabel}
                      </a>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">Email</h4>
                      <a
                        href={`mailto:${siteConfig.primaryEmail}`}
                        className="gmail"
                      >
                        {siteConfig.primaryEmail}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Website</h4>
                      <a
                        href={siteConfig.url}
                        className="gmail"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {siteConfig.domain}
                      </a>
                    </div>
                    {/* Follow us / site social (hidden for now)
                    <div className="call-center mb-0">
                      <h4 className="title">Site links</h4>
                      <ul className="social-icon">
                        <li>
                          <a
                            href={siteConfig.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={siteConfig.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={siteConfig.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={siteConfig.loginUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
