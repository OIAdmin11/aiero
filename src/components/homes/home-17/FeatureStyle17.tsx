import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const businessCases = [
  {
    title: "No Sleep Receptionist",
    description:
      "Best when missed calls are missed money and you need AI phone tied to your real stack.",
  },
  {
    title: "24/7 Web Concierge",
    description:
      "Best when your current site gets traffic but chat and forms are where leads go to die.",
  },
  {
    title: "The Invisible Admin",
    description:
      "Best when you need automated text and email reminders in the CRM and inbox tools you already use—not another manual follow-up list.",
  },
  {
    title: "Speed-to-Lead Outbound Engine",
    description:
      "Best when form fills cool off in minutes and the first dial wins the job.",
  },
  {
    title: "AI-Optimized Conversion",
    description:
      "Best when you need a fast site that feeds your AI and outranks competitors—not a pretty brochure.",
  },
  {
    title: "The Surveyor",
    description:
      "Best when you need honest feedback at scale without burning payroll on manual calls.",
  },
];

export default function FeatureStyle17() {
  return (
    <section className="feature-sec17 ibt-section-gap">
      <div className="container">
        <div className="sec-title white">
          <SubTitleWrapper>proof</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Here is when these jobs usually make sense
          </TitleSplitWrapper>
          <p>
            If the problem is small, leave it alone. If it keeps costing you
            time, jobs, or cash flow, it is probably worth fixing.
          </p>
        </div>
        <div className="row g-4">
          {businessCases.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature-card10">
                <h4 className="title">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
