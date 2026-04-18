import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Features2 from "@/components/features/Features2";

export default function Features() {
  return (
    <section className="feature-sec1 ibt-section-gap">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>features</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            The unique selling points &amp; advantages of our service
          </TitleSplitWrapper>
        </div>
        <div className="row">
          <Features2 />
        </div>
      </div>
    </section>
  );
}
