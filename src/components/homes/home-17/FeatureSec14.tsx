import { useState } from "react";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

/** SVG used only for “No Sleep Receptionist” (default tab). */
const NO_SLEEP_RECEPTIONIST_IMAGE = `/assets/images/page-title/${encodeURIComponent(
  "robo-advisor-working-on-holographic-screen-2025-11-05-04-21-49-utc (1).svg",
)}`;

/** SVG for “24/7 Web Concierge”. */
const WEB_CONCIERGE_IMAGE = `/assets/images/page-title/${encodeURIComponent(
  "AI Chatbot Support Communication.svg",
)}`;

/** SVG for “The Invisible Admin”. */
const INVISIBLE_ADMIN_IMAGE = `/assets/images/page-title/${encodeURIComponent(
  "Artificial Intelligence.svg",
)}`;

/** Image for “The Surveyor”. */
const SURVEYOR_IMAGE = `/assets/images/page-title/${encodeURIComponent(
  "customer survey form on a clipboard with pencil.png",
)}`;

/** Image for “Speed-to-Lead”. */
const SPEED_TO_LEAD_IMAGE = "/assets/images/page-title/robotai_1.jpg";

/** SVG for “AI-Optimized Conversion”. */
const AI_OPTIMIZED_CONVERSION_IMAGE = `/assets/images/page-title/${encodeURIComponent(
  "AI Robot Technology Illustration.svg",
)}`;

const featureTabs = [
  {
    id: "answering",
    label: "No Sleep Receptionist",
    imageSrc: NO_SLEEP_RECEPTIONIST_IMAGE,
    paragraphs: [
      "The first person to respond does not win the sale—they win the right to keep the conversation. If you are not answering, you are not in the conversation.",
      "No Sleep Receptionist is an inbound AI phone layer that intercepts missed calls, pre-qualifies buyers, answers FAQs, and books appointments—integrated with your calendar and CRM so it is not another disconnected tool. Best when one missed call costs more than doing nothing.",
    ],
  },
  {
    id: "webchat",
    label: "24/7 Web Concierge",
    imageSrc: WEB_CONCIERGE_IMAGE,
    paragraphs: [
      "Visitors do not wait—they compare. If your site is a form and a promise, they leave.",
      "We install AI webchat on the site you already have: instant FAQs, structured contact capture, and appointment booking—piped into the same systems as your phone so you are not chasing ghosts across three inboxes. Best when traffic is real but forms underperform.",
    ],
  },
  {
    id: "integrations",
    label: "The Invisible Admin",
    imageSrc: INVISIBLE_ADMIN_IMAGE,
    paragraphs: [
      "AI that cannot execute inside your systems is theater. You do not need more chat—you need fewer dropped threads because nobody sent the reminder.",
      "The Invisible Admin runs automated text and email reminders—confirmations, prep messages, nudges, and follow-ups—through your preferred SMS and email tools, wired to your calendar and CRM so nothing lives in a side inbox. Best when deals slip because follow-up was manual or forgotten.",
    ],
  },
  {
    id: "speed-lead",
    label: "Speed-to-Lead",
    imageSrc: SPEED_TO_LEAD_IMAGE,
    paragraphs: [
      "Speed-to-lead is not a vanity metric—it is the difference between a booked call and a forgotten form.",
      "Speed-to-Lead Outbound Engine ties your form to an outbound AI call that fires in about sixty seconds—while they still care. Best when form fills die in the wait.",
    ],
  },
  {
    id: "ai-conversion",
    label: "AI-Optimized Conversion",
    imageSrc: AI_OPTIMIZED_CONVERSION_IMAGE,
    paragraphs: [
      "Traffic without a conversion path is expensive entertainment. Your site should push people into your AI, not admire your logo.",
      "AI-Optimized Conversion is a fast, SEO-built site designed to drive visitors into your AI stack, with AI-assisted competitive insight so you rank where buyers search and surface when people ask an AI for options. Best when your current site looks good and still does not pay rent.",
    ],
  },
  {
    id: "surveyor",
    label: "The Surveyor",
    imageSrc: SURVEYOR_IMAGE,
    paragraphs: [
      "What you do not hear from customers costs you twice: once in churn, once in reputation you never see coming.",
      "The Surveyor uses AI outbound calls for feedback, follow-ups, and constituent or client surveys—honest signal without burning payroll on manual dialing. Best when you need truth at scale, not anecdotes from the loudest voices.",
    ],
  },
];

export default function FeatureSec14() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = featureTabs[activeIndex];

  return (
    <section className="feature-sec14 v2 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-img14">
              <img
                alt={activeTab.label}
                src={activeTab.imageSrc}
                width={847}
                height={602}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-content12">
              <div className="sec-title white">
                <SubTitleWrapper>products</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Pick the fix that matches where work is slipping
                </TitleSplitWrapper>
              </div>
              <ul className="nav nav-tabs" role="tablist">
                {featureTabs.map((tab, index) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      type="button"
                      className={`nav-link ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={index === activeIndex}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div
                  key={activeTab.id}
                  className="tab-pane fade show active ibt-tab-fade"
                >
                  {activeTab.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
