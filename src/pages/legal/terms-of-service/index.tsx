import { Link } from "react-router-dom";

import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";
import {
  CURRENT_TERMS_EFFECTIVE_DATE,
  CURRENT_TERMS_VERSION,
  TERMS_ACCEPTANCE_LABEL,
  TERMS_CLICKWRAP_SUMMARY,
  TERMS_PRODUCT_NAME,
  TERMS_SECTIONS,
  TERMS_TITLE,
} from "@/data/terms";

export default function TermsOfServicePage() {
  getPageMetadata("terms-of-service");

  return (
    <>
      <section className="page-banner11">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Terms</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ {TERMS_TITLE} /</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link to="/" title="">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>{TERMS_TITLE}</li>
        </ul>
      </section>

      <section className="feature-sec10 ibt-section-gapBottom">
        <div className="container">
          <div className="sec-title">
            <SubTitleWrapper>legal</SubTitleWrapper>
            <TitleSplitWrapper tag="h2" className="title animated-heading">
              {TERMS_PRODUCT_NAME}
            </TitleSplitWrapper>
            <p>
              Current terms version: <strong>{CURRENT_TERMS_VERSION}</strong>
              {" · "}Effective date:{" "}
              <strong>{CURRENT_TERMS_EFFECTIVE_DATE}</strong>
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="price-content3">
                <div style={{ padding: 32 }}>
                  <h4 className="title">Clickwrap summary</h4>
                  <ul className="mb-3">
                    {TERMS_CLICKWRAP_SUMMARY.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mb-0">
                    <strong>{TERMS_ACCEPTANCE_LABEL}</strong>
                  </p>
                </div>
              </div>
            </div>

            {TERMS_SECTIONS.map((section) => (
              <div key={section.title} className="col-12">
                <div className="price-content3">
                  <div style={{ padding: 32 }}>
                    <h4 className="title">{section.title}</h4>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.paragraphsHtml?.map((paragraph) => (
                      <p
                        key={paragraph}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}

                    {section.bullets?.length ? (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}

                    {section.bulletsHtml?.length ? (
                      <ul>
                        {section.bulletsHtml.map((bullet) => (
                          <li
                            key={bullet}
                            dangerouslySetInnerHTML={{ __html: bullet }}
                          />
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
