export const PRIVACY_TITLE = "Privacy Policy";
export const PRIVACY_COMPANY_NAME = "Scene Shift";
export const PRIVACY_PRODUCT_NAME = "Scene Shift Customer Portal";
export const CURRENT_PRIVACY_VERSION = "2026-04-19.3";
export const CURRENT_PRIVACY_EFFECTIVE_DATE = "April 19, 2026";

export interface PrivacySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /**
   * Optional rich-text paragraphs rendered after `paragraphs`. Rendered via
   * `dangerouslySetInnerHTML`, so values must be trusted static strings
   * authored in source, never user input.
   */
  paragraphsHtml?: string[];
  /**
   * Optional rich-text bullets rendered after `bullets`. Rendered via
   * `dangerouslySetInnerHTML`, so values must be trusted static strings
   * authored in source, never user input.
   */
  bulletsHtml?: string[];
}

export const PRIVACY_SUMMARY = [
  "This Privacy Policy details what data we collect, how it is used, and confirms that information will not be shared with third parties or for marketing purposes, except to the limited service providers that operate the Services on our behalf under written contracts that restrict their use of the information.",
  "We explain what personal information we collect through the Scene Shift Customer Portal, voice assistants, and related services, where it comes from, and why we process it.",
  'We do not "sell" personal information for money, and we do not "share" personal information for cross-context behavioral advertising as those terms are defined under California law. We also do not engage in targeted advertising or in profiling that produces legal or similarly significant effects.',
  "You have privacy rights under California, Iowa, and other U.S. state privacy laws - including rights to know, access, correct, delete, port, and opt out - and we provide one set of request channels that works for residents of every U.S. state and territory.",
  "For personal information we process on behalf of business customers (for example, information about a customer's end users collected by their voice assistant), the business customer is the controller and their own privacy policy and instructions govern that processing.",
] as const;

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "introduction",
    title: "1. Introduction and scope",
    paragraphs: [
      `This Privacy Policy describes how ${PRIVACY_COMPANY_NAME} ("we," "us," or "our") collects, uses, discloses, retains, and protects personal information in connection with the ${PRIVACY_PRODUCT_NAME}, our websites, hosted features, APIs, embedded widgets, voice assistants, AI agents, automations, and related professional and support services (collectively, the "Services").`,
      'This Policy applies to personal information of: (a) representatives of businesses that sign up for, administer, or use the Services ("Portal Users"); (b) visitors to our marketing websites; (c) individuals whose information is provided to us by a business customer or processed through the Services at the direction of a business customer ("End-User Data"); and (d) individuals who interact with voice assistants, embedded widgets, or automations we operate for our business customers.',
      'For End-User Data, the business customer that deploys the Services is the "business," "controller," or "data controller," and we act as their "service provider," "processor," or "contractor" under applicable U.S. state privacy laws. If you are an end user interacting with a business that uses our Services, please contact that business for questions about how they use your information; we will refer privacy requests relating to End-User Data to that business, as required by law.',
      "This Policy does not apply to third-party websites, applications, model providers, telephony providers, integrations, or services that are not owned or operated by us, even if they are linked to, embedded in, or reached through the Services.",
    ],
  },
  {
    id: "categories",
    title: "2. Personal information we collect",
    paragraphs: [
      'We collect the following categories of personal information, using the category labels defined under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (collectively, "CCPA"). Similar categories are treated as personal data or personal information under other state privacy laws, including the Iowa Consumer Data Protection Act ("ICDPA").',
    ],
    bullets: [
      "Identifiers - such as name, business name, postal address, email address, phone number, account username, internet protocol address, device identifier, and similar identifiers.",
      "Customer records information (Cal. Civ. Code § 1798.80) - such as contact details, employer or business affiliation, signature, and similar information you provide when creating or managing an account.",
      "Commercial information - such as subscription plan, products or services purchased, usage history, billing records, and transaction information (payment card details are handled by our payment processor and are not stored by us in full).",
      "Internet or other electronic network activity information - such as login events, pages viewed, buttons clicked, referring URLs, session duration, interaction logs, crash and error logs, and device and browser information.",
      "Geolocation data - approximate location derived from IP address and, where a user voluntarily provides it (for example, a business service area), the location information they provide. We do not collect precise geolocation from mobile devices.",
      "Audio, electronic, and similar information - such as voice recordings, transcripts, call metadata, chat messages, and other communications that are transmitted through or generated by the Services (including voice assistants and embedded widgets).",
      "Professional or employment-related information - such as job title, role, and business affiliation of Portal Users and contacts they add to the Services.",
      "Inferences drawn from the above - such as preferences, interests, predicted intent, categorization of calls or messages, and automation triggers, in each case derived from the information described above to provide and improve the Services.",
      "Sensitive personal information - in limited cases, voice recordings and content of communications may contain information that a user chooses to share with a voice assistant or agent (for example, account credentials spoken aloud, precise location, or health or financial details). We do not intentionally solicit sensitive personal information, we do not use sensitive personal information to infer characteristics about an individual, and we use it only for the purposes permitted under California Civil Code § 1798.121(a) and comparable provisions of other state privacy laws.",
    ],
  },
  {
    id: "sources",
    title: "3. Sources of personal information",
    paragraphs: ["We collect personal information from the following sources:"],
    bullets: [
      "Directly from Portal Users - when you create an account, configure the Services, contact support, respond to surveys, or otherwise interact with us.",
      'Automatically, through the Services - through cookies, pixels, server logs, SDKs, and similar technologies, as described in the "Cookies and similar technologies" section below.',
      "From our business customers - when they provide contact information for their team members, upload customer or lead data, configure automations, or otherwise route End-User Data through the Services.",
      "From individuals interacting with our business customers - when end users call a voice assistant, submit an embedded widget, or otherwise engage with automations deployed by a business customer.",
      "From service providers, telephony carriers, and integrations - such as identity providers, payment processors, telecommunications carriers, AI model providers, analytics providers, and integration partners (for example, calendar, CRM, or messaging platforms that a user connects).",
      "From publicly available sources and data providers - in limited cases, to verify business information, prevent fraud, or support security.",
    ],
  },
  {
    id: "purposes",
    title: "4. How we use personal information",
    paragraphs: ["We use personal information for the following business and commercial purposes:"],
    bullets: [
      "Providing and operating the Services, including authentication, account management, call routing, voice assistant operation, transcription, message delivery, automations, and embedded widgets.",
      "Maintaining the security, integrity, and reliability of the Services, including fraud prevention, abuse detection, incident response, backups, and disaster recovery.",
      "Responding to support, compliance, and legal inquiries, and providing notices about the Services.",
      "Billing, payment processing, tax compliance, accounting, and auditing.",
      "Monitoring, debugging, and improving the Services, including evaluating performance, measuring usage, and diagnosing errors.",
      "Developing, training, and improving the features and quality of the Services, including improving models and automations that power the Services. We do not use content of our business customers' End-User Data to train third-party foundation models, and we do not authorize third-party AI providers to use business customer content to train their models except as required to deliver the Services.",
      "Enforcing our agreements and policies and complying with applicable law, legal process, and lawful government requests.",
      "With consent, or as otherwise permitted by law, for purposes we describe at the time of collection.",
    ],
  },
  {
    id: "disclosures",
    title: "5. How we disclose personal information",
    paragraphs: [
      "We disclose personal information only for the business and commercial purposes described above, and only to the following categories of recipients:",
    ],
    bullets: [
      'Our service providers, subprocessors, and contractors - such as cloud hosting providers, telephony and SMS providers, AI model providers, analytics providers, fraud-prevention providers, email and notification providers, and payment processors. These recipients are bound by written contracts that restrict their use of personal information to providing services to us and that meet the "service provider" or "contractor" standards of CCPA § 1798.140 and comparable provisions of other state privacy laws.',
      "Our business customers - where the personal information relates to their account, their users, or End-User Data they have routed through the Services.",
      "Legal, compliance, and safety recipients - such as law enforcement, regulators, courts, and other parties, when we believe disclosure is necessary to comply with law, respond to lawful process, protect rights, prevent fraud, investigate abuse, or respond to an emergency involving risk of harm.",
      "Parties to a corporate transaction - such as an actual or prospective acquirer, investor, lender, or successor entity in connection with a merger, acquisition, reorganization, financing, due diligence, bankruptcy, or sale of assets.",
      "Other parties, with your consent or at your direction.",
    ],
  },
  {
    id: "no-sale",
    title: "6. No sale of personal information; no third-party or marketing sharing",
    paragraphs: [
      "This Policy details what data we collect, how it is used, and confirms that information will not be shared with third parties or for marketing purposes. For the avoidance of doubt, we do not rent, sell, trade, or otherwise transfer personal information to third parties for their own independent use, for advertising, or for marketing or promotional purposes, and we do not authorize our service providers to do so.",
      'We do not "sell" personal information in exchange for monetary consideration, and we do not "share" personal information for cross-context behavioral advertising, as those terms are defined by the CCPA. We do not engage in "targeted advertising" or the "sale" of personal data under the ICDPA or other state privacy laws.',
      'The only parties with whom we disclose personal information are the categories of recipients described in Section 5 (service providers and contractors acting on our behalf under written contracts, our business customers with respect to their own account and End-User Data, legal and safety recipients, and parties to a corporate transaction, and other parties only with your consent or at your direction). None of those disclosures are for the recipient\'s own marketing or promotional purposes.',
      'We do not use personal information for automated decision-making or profiling that produces legal effects or similarly significant effects about consumers (for example, decisions about eligibility for financial or lending services, housing, insurance, education enrollment, criminal justice, employment, healthcare, or access to essential goods or services). If our practices change, we will update this Policy and provide any notice and opt-out or consent rights required by law.',
      'Because we do not sell or share personal information for cross-context behavioral advertising, any Global Privacy Control ("GPC") signal or "Do Not Sell or Share My Personal Information" choice you send us is already honored by default; we will continue to honor these signals even if our practices change in the future.',
    ],
  },
  {
    id: "sms-data",
    title: "7. Mobile information, SMS opt-in, and messaging data",
    paragraphs: [
      "When you provide a mobile phone number to us or opt in to receive text messages from Scene Shift, we collect the phone number, your opt-in status, the date and time of opt-in, the keyword or campaign you opted in to, the content of the messages you receive from and send to us, and delivery metadata provided by our telephony providers.",
      'Opt-in and confirmation: You opt in to the Scene Shift Messaging Program by texting the keyword START to the number associated with your Scene Shift AI Assistant or by enabling messaging in your Scene Shift account. After opt-in, you will receive a confirmation message substantially in the following form: "SceneShift: You are now opted-in to receive notifications from your SceneShift AI Assistant on your phone. For help, reply HELP. To opt-out, reply STOP". You can text HELP to any Scene Shift messaging program for support, and you can text STOP at any time to opt out.',
      "No mobile information, including phone numbers and SMS consent, is shared with third parties or affiliates for their marketing or promotional purposes. We also do not sell mobile information or use it for targeted advertising. Scene Shift shares mobile information only with service providers that operate the messaging program on our behalf (for example, telephony aggregators and SMS delivery providers), under written contracts that restrict them to providing services to us.",
      "The Terms of Service available at /terms-of-service describe the messaging program in more detail, including program name, description, message frequency, message-and-data-rate disclosures, the START / HELP / STOP keywords, and support contact information.",
      "If you interact with a Scene Shift business customer who operates their own messaging program using the Services, the business customer is the sender and controller of those messages. Contact that business directly with questions about their messaging data practices.",
    ],
  },
  {
    id: "voice-recording",
    title: "8. Call recording, telephony, and messaging",
    paragraphs: [
      "The Services include voice assistants, inbound and outbound calling, and messaging features. Calls may be recorded, transcribed, analyzed, summarized, and stored by the Services. Messages may be logged, analyzed, and stored.",
      "You are responsible for providing any notices and obtaining any consents required by law for call recording, monitoring, transcription, AI analysis, messaging, and marketing communications in the jurisdictions where your callers, recipients, or employees are located - including two-party (all-party) consent states such as California, Connecticut, Delaware, Florida, Illinois, Maryland, Massachusetts, Michigan, Montana, Nevada, New Hampshire, Oregon, Pennsylvania, Vermont, and Washington.",
      "If you contact a business that uses our Services, the business is responsible for its notice and consent practices. Contact that business with questions about how they handle your call, message, or voice recording.",
    ],
  },
  {
    id: "ai",
    title: "9. AI processing, inference, and human review",
    paragraphs: [
      "The Services use artificial intelligence and machine learning models - operated by us or by third-party providers - to generate responses, summaries, classifications, extracted data, automations, and other outputs. AI systems are probabilistic and may produce content that is inaccurate, incomplete, or unsuitable for your use case; you are responsible for review, supervision, and the decisions you make based on AI output, as further described in our Terms of Service.",
      "We do not use the content of business customer End-User Data to train third-party foundation models. Where we use personal information to improve our own models or Services, we limit that use to lawful purposes, apply access controls and retention limits, and avoid using sensitive personal information to infer characteristics about an individual.",
    ],
  },
  {
    id: "retention",
    title: "10. Retention",
    paragraphs: [
      "We retain personal information for as long as reasonably necessary to provide the Services, maintain business records, comply with legal, tax, accounting, and audit obligations, resolve disputes, prevent fraud and abuse, and enforce our agreements. Retention periods vary by the type of information, the purpose for which it is processed, and applicable legal requirements.",
      "For End-User Data processed on behalf of a business customer, retention is determined by the business customer's settings, instructions, and contract with us. When an account is closed or a customer terminates the Services, we delete or de-identify personal information after a reasonable wind-down period, except for information we are required or permitted to retain by law.",
    ],
  },
  {
    id: "security",
    title: "11. Information security",
    paragraphs: [
      "We maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, misuse, and alteration. Safeguards include access controls, least-privilege permissions, encryption in transit, encryption at rest for supported data stores, audit logging, vendor security reviews, and incident-response procedures.",
      "No service is completely secure. We cannot guarantee that unauthorized access, loss, or misuse will never occur. You are responsible for safeguarding your credentials, keeping software up to date, and promptly notifying us of any suspected security incident affecting your account.",
    ],
  },
  {
    id: "cookies",
    title: "12. Cookies, analytics, and similar technologies",
    paragraphs: [
      "We and our service providers use cookies, pixels, local storage, and similar technologies to operate the Services, remember preferences, maintain sessions, secure accounts, measure performance, and understand usage. We use only strictly necessary and first-party analytics technologies by default; we do not use cookies or similar technologies for cross-context behavioral advertising.",
      "You can manage cookies through your browser settings. If you block strictly necessary cookies, some features of the Services may not work.",
      'Because we do not engage in cross-context behavioral advertising, we treat browser signals such as Global Privacy Control as opt-out signals by default. We do not respond to legacy "Do Not Track" browser signals because there is no common industry standard for them.',
    ],
  },
  {
    id: "rights-overview",
    title: "13. Your privacy rights (all U.S. states)",
    paragraphs: [
      "Subject to verification and applicable exceptions, residents of every U.S. state and territory may submit the following requests about personal information we process as a controller. Residents of states with comprehensive privacy laws have specific statutory rights, summarized in the sections below.",
    ],
    bullets: [
      "Right to know / access - to confirm whether we process personal information about you and to obtain a copy or summary of the categories, sources, purposes, and recipients of that information.",
      "Right to correct - to request correction of inaccurate personal information we maintain about you.",
      "Right to delete - to request deletion of personal information we collected from you, subject to applicable exceptions.",
      "Right to data portability - to receive a copy of personal information you provided to us in a portable, readily usable format, where technically feasible.",
      "Right to opt out of sale, sharing, or targeted advertising - we do not sell or share personal information for cross-context behavioral advertising or engage in targeted advertising, so this right is honored by default.",
      "Right to limit use of sensitive personal information - we only use sensitive personal information for purposes permitted by law without additional consent.",
      "Right to non-discrimination - we will not deny service, charge different prices, or provide a different level of quality because you exercised a privacy right.",
      "Right to appeal - where provided by state law, you may appeal our decision on a privacy request as described below.",
    ],
  },
  {
    id: "california",
    title: "14. California residents (CCPA / CPRA)",
    paragraphs: [
      'If you are a California resident, you have the rights described in Section 13 under the CCPA, together with the additional rights described in this Section. You also have the right under California Civil Code § 1798.83 ("Shine the Light") to request information about our disclosures of personal information to third parties for their direct marketing purposes - we do not make such disclosures.',
      "Categories collected, sources, purposes, and recipients. The categories of personal information we collect, the categories of sources, the business and commercial purposes for collection, and the categories of third parties to whom we disclose personal information are described in Sections 2-5 of this Policy. We have not sold or shared (as defined by the CCPA) personal information of California residents, including minors under 16, in the preceding 12 months.",
      "Sensitive personal information. We use sensitive personal information only to provide the Services, maintain their security and integrity, prevent fraud and abuse, ensure quality, and for other purposes permitted by Civil Code § 1798.121(a) without the requirement of an additional right to limit.",
      "Retention. We retain each category of personal information for the period described in Section 10 and only for as long as reasonably necessary for the disclosed purposes.",
      "Authorized agents. You may use an authorized agent to submit a request. We may require the agent to provide proof of authority and may require you to verify your own identity with us or to directly confirm the agent's authority.",
      "Verification. To protect your information, we will take reasonable steps to verify your identity using information we already maintain, such as account credentials, email, or recent account activity. We may decline a request we cannot verify.",
      "Response times. We will confirm receipt of a verifiable request within 10 business days and respond within 45 days, with one 45-day extension where reasonably necessary and with notice to you.",
      "Metrics. Where required, metrics on consumer requests received, complied with, partially complied with, or denied will be published or made available upon request.",
    ],
  },
  {
    id: "iowa",
    title: "15. Iowa residents (ICDPA)",
    paragraphs: [
      'If you are an Iowa resident, you have the following rights under the Iowa Consumer Data Protection Act, Iowa Code ch. 715D, effective January 1, 2025:',
    ],
    bullets: [
      "Right to confirm whether we are processing personal data about you and to access that personal data.",
      "Right to delete personal data provided by you or obtained about you.",
      "Right to obtain a copy of personal data you previously provided to us, in a portable and, to the extent technically feasible, readily usable format.",
      "Right to opt out of the sale of personal data. We do not sell personal data as defined under the ICDPA.",
      "Right to a clear and conspicuous disclosure if we process personal data for targeted advertising, and the ability to opt out of such processing. We do not engage in targeted advertising.",
    ],
  },
  {
    id: "iowa-process",
    title: "16. Iowa ICDPA - how to exercise your rights and appeal",
    paragraphs: [
      "Iowa residents may submit a request using the methods described in Section 19. We will respond to a verified request within 90 days of receipt. Where reasonably necessary, we may extend the response period by an additional 45 days and will notify you of the extension and the reason for it, consistent with Iowa Code § 715D.4.",
      "If we decline to take action on your request, we will inform you of our decision and the reasons for it within the applicable response period, and we will provide instructions for how to appeal our decision.",
      "Appeals. You may appeal our decision within a reasonable period by contacting us using the methods in Section 19. We will respond to your appeal in writing within 60 days of receipt, providing a written explanation of the reasons for our decision. If we deny the appeal, we will provide you with an online mechanism, if available, or other method to submit a complaint to the Iowa Attorney General.",
    ],
  },
  {
    id: "other-states",
    title: "17. Other U.S. state privacy rights",
    paragraphs: [
      "Residents of other states with comprehensive consumer privacy laws - including Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Delaware, New Hampshire, New Jersey, Tennessee, Minnesota, Maryland, Indiana, Kentucky, Nebraska, and Rhode Island - have rights similar to those described in Section 13, subject to each state's specific exceptions, thresholds, and effective dates. Where a state law provides a right of appeal, you may appeal our decision on your request by contacting us using the methods in Section 19.",
      "If you are a resident of a state with a comprehensive privacy law, we honor the applicable statutory rights even if a specific state is not listed above. We also honor recognized universal opt-out mechanisms such as Global Privacy Control for opt-out rights in states that require it.",
      'Residents of Nevada have the right under Nevada Revised Statutes § 603A.340 to direct us not to "sell" certain covered information. We do not sell covered information within the meaning of that statute.',
    ],
  },
  {
    id: "children",
    title: "18. Children's privacy",
    paragraphs: [
      'The Services are intended for business use by adults. The Services are not directed to children under 13, and we do not knowingly collect personal information from children under 13 in violation of the Children\'s Online Privacy Protection Act ("COPPA"). We do not knowingly sell or share personal information of consumers under 16 for cross-context behavioral advertising or targeted advertising. If you believe a child has provided us personal information, please contact us so we can take appropriate action.',
    ],
  },
  {
    id: "requests",
    title: "19. How to submit a privacy request",
    paragraphs: [
      "You may submit a request to exercise a privacy right, ask a question about this Policy, or appeal a decision by contacting us through the support channel associated with your account or by emailing the privacy contact listed in your order form or agreement. If you do not have an account, you may submit a request through any public contact method we make available on our website.",
      "We will ask for the information reasonably necessary to verify your identity and process your request, and we will respond within the time frame required by applicable law. If your request concerns End-User Data that we process on behalf of a business customer, we will refer your request to the business customer and notify you of the referral, consistent with applicable law.",
      "We do not charge a fee to process or respond to your privacy request unless it is excessive, repetitive, or manifestly unfounded, in which case we will notify you and describe any fee before completing the request.",
    ],
  },
  {
    id: "b2b",
    title: "20. Personal information processed for our business customers",
    paragraphs: [
      "When a business customer uses the Services to process End-User Data - for example, by configuring a voice assistant, importing a contact list, routing calls, or recording customer interactions - we process that information as a service provider, processor, or contractor under applicable U.S. state privacy laws and our written agreement with the business customer.",
      "We only process End-User Data in accordance with the business customer's instructions and the Services configuration, and we do not sell End-User Data, share it for cross-context behavioral advertising, use it for targeted advertising, or combine it with information received from other sources, except to the limited extent permitted under CCPA § 1798.140(ag)(1) and comparable provisions of other state privacy laws.",
      "If you are an end user and wish to exercise privacy rights regarding information processed by a business customer, please contact the business directly. We will cooperate with the business customer to respond to verified requests in accordance with law.",
    ],
  },
  {
    id: "international",
    title: "21. Users outside the United States",
    paragraphs: [
      "The Services are operated in the United States and are intended for customers and users located in the United States. If you access the Services from outside the United States, you understand that your personal information may be transferred to, processed in, and stored in the United States, where data-protection laws may differ from those in your country. By using the Services, you consent to that processing to the extent permitted by applicable law.",
    ],
  },
  {
    id: "changes",
    title: "22. Changes to this Policy",
    paragraphs: [
      "We may update this Policy from time to time. If we make material changes, we will update the effective date and version at the top of this Policy and provide additional notice as required by law. Your continued use of the Services after the updated Policy takes effect constitutes acceptance of the updated Policy, to the extent permitted by applicable law.",
    ],
  },
  {
    id: "contact",
    title: "23. Contact us",
    paragraphs: [
      `You can contact us about this Policy or submit a privacy request through the support channel associated with your ${PRIVACY_COMPANY_NAME} account or agreement, or through the contact methods published on our website.`,
    ],
  },
];
