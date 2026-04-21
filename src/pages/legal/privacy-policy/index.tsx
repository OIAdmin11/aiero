import { Link } from "react-router-dom";

import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import {
  CURRENT_PRIVACY_EFFECTIVE_DATE,
  CURRENT_PRIVACY_VERSION,
  PRIVACY_PRODUCT_NAME,
  PRIVACY_SECTIONS,
  PRIVACY_SUMMARY,
  PRIVACY_TITLE,
} from "@/data/privacy";
import { getPageMetadata } from "@/data/pages";

export default function PrivacyPolicyPage() {
  getPageMetadata("privacy-policy");

  return (
    <>
      <section className="page-banner11">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Privacy</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ {PRIVACY_TITLE} /</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link to="/" title="">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>{PRIVACY_TITLE}</li>
        </ul>
      </section>

      <section className="feature-sec10 ibt-section-gapBottom">
        <div className="container">
          <div className="sec-title">
            <SubTitleWrapper>legal</SubTitleWrapper>
            <TitleSplitWrapper tag="h2" className="title animated-heading">
              {PRIVACY_PRODUCT_NAME}
            </TitleSplitWrapper>
            <p>
              Version {CURRENT_PRIVACY_VERSION} effective{" "}
              {CURRENT_PRIVACY_EFFECTIVE_DATE}.
            </p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-12">
              <div className="price-content3">
                <div style={{ padding: 32 }}>
                  <h4 className="title">Summary</h4>
                  {PRIVACY_SUMMARY.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.id} className="col-12">
                <div className="price-content3">
                  <div style={{ padding: 32 }}>
                    <h4 className="title">{section.title}</h4>
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={`${section.id}-paragraph-${index}`}
                        className={
                          index === section.paragraphs.length - 1 &&
                          !section.paragraphsHtml?.length &&
                          !section.bullets?.length &&
                          !section.bulletsHtml?.length
                            ? "mb-0"
                            : undefined
                        }
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.paragraphsHtml?.map((paragraph, index) => (
                      <p
                        key={`${section.id}-paragraph-html-${index}`}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}

                    {section.bullets?.length ? (
                      <ul className={section.bulletsHtml?.length ? undefined : "mb-0"}>
                        {section.bullets.map((bullet, index) => (
                          <li key={`${section.id}-bullet-${index}`}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}

                    {section.bulletsHtml?.length ? (
                      <ul className="mb-0">
                        {section.bulletsHtml.map((bullet, index) => (
                          <li
                            key={`${section.id}-bullet-html-${index}`}
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
