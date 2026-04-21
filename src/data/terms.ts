export const TERMS_TITLE = "Terms of Service";
export const TERMS_COMPANY_NAME = "Scene Shift";
export const TERMS_PRODUCT_NAME = "Scene Shift Customer Portal";
export const CURRENT_TERMS_VERSION = "2026-04-19.3";
export const CURRENT_TERMS_EFFECTIVE_DATE = "April 19, 2026";

export type TermsAcceptanceMethod = "signup_clickwrap" | "in_app_clickwrap";

export interface TermsAcceptanceRecord {
  termsVersion: string;
  acceptedAt: string;
  acceptanceMethod: TermsAcceptanceMethod;
  ipAddress?: string | null;
  userAgent?: string | null;
}

export interface TermsSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /**
   * Optional rich-text paragraphs rendered after `paragraphs`. Rendered via `{@html}`,
   * so values must be trusted static strings authored in source - never user input.
   */
  paragraphsHtml?: string[];
  /**
   * Optional rich-text bullets rendered after `bullets`. Rendered via `{@html}`, so
   * values must be trusted static strings authored in source - never user input.
   */
  bulletsHtml?: string[];
}

export interface TermsStatus {
  currentTermsVersion: string;
  currentTermsEffectiveDate: string;
  acceptedTermsVersion: string | null;
  acceptedTermsAt: string | null;
  isCurrentTermsAccepted: boolean;
}

export const TERMS_CLICKWRAP_SUMMARY = [
  "You are responsible for all business decisions, commitments, pricing, scheduling, disclosures, and customer communications made using the platform.",
  "AI outputs may be inaccurate, incomplete, or unauthorized and must be reviewed by your business before you rely on them or present them to anyone else.",
  "You are responsible for providing any notices and obtaining any consents required by federal, state, or local law - including two-party call-recording consent, TCPA messaging consent, and consumer privacy notices - for anyone you contact or record through the Services.",
  "Our Privacy Policy describes how we collect and use personal information and explains the privacy rights available to residents of California, Iowa, and other U.S. states; when we process personal information on your behalf, we act as your service provider or processor.",
  'To opt in to text messages, text START or enable messaging in your account; after opt-in you will receive a confirmation that reads: "SceneShift: You are now opted-in to receive notifications from your SceneShift AI Assistant on your phone. For help, reply HELP. To opt-out, reply STOP". Message and data rates may apply, message frequency varies by your activity, you can text HELP for help, and you can text STOP at any time to opt out. We do not share mobile opt-in data with third parties for marketing.',
  "To the maximum extent permitted by law, Scene Shift disclaims warranties, limits liability, and requires you to indemnify us for claims arising from your business, data, instructions, and use of the service.",
  "Nothing in these Terms limits any non-waivable rights you may have under applicable consumer-protection or privacy laws.",
];

export const TERMS_ACCEPTANCE_LABEL =
  "I have read and agree to the Terms of Service, including the AI disclaimers, limitation of liability, and indemnity provisions.";

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance and scope",
    paragraphs: [
      `These Terms of Service ("Terms") govern your access to and use of the ${TERMS_PRODUCT_NAME}, related applications, hosted features, APIs, embedded widgets, voice assistants, AI agents, automations, and any related professional or support services that ${TERMS_COMPANY_NAME} or its affiliates make available to you (collectively, the "Services"). By creating an account, clicking to accept these Terms, accessing the Services, or allowing the Services to be used on your behalf, you agree to be bound by these Terms.`,
      'If you use the Services on behalf of a company or other legal entity, you represent and warrant that you have authority to bind that entity to these Terms. In that case, "you" and "your" refer to that entity and its authorized users.',
    ],
  },
  {
    id: "eligibility",
    title: "2. Accounts and security",
    paragraphs: [
      "You must provide accurate, current, and complete information, keep it updated, and maintain the confidentiality of your credentials. You are responsible for all activity under your account, including activity by employees, contractors, agents, or any other person who obtains access through you.",
      "You must promptly notify us of any suspected unauthorized access, security incident, or misuse involving your account or the Services.",
    ],
  },
  {
    id: "service-use",
    title: "3. Your use of the services",
    paragraphs: [
      'You may use the Services only in compliance with these Terms, your separate order or subscription terms if any, and all applicable laws, regulations, industry rules, and contractual obligations. This includes, without limitation, federal and state consumer-protection, privacy, telemarketing, call-recording, wiretap, and messaging laws such as the Telephone Consumer Protection Act ("TCPA"), the CAN-SPAM Act, federal and state "Do Not Call" rules, state two-party (all-party) call-recording consent laws, and state comprehensive privacy laws including the California Consumer Privacy Act and the Iowa Consumer Data Protection Act.',
    ],
    bullets: [
      "configure, review, and supervise your assistants, prompts, workflows, automations, and business rules before deployment and while they are live;",
      "ensure that statements, offers, pricing, timelines, appointments, estimates, representations, and commitments made in connection with your business are accurate, authorized, and lawful;",
      "obtain all notices, permissions, disclosures, and consents required for calls, recordings, transcription, AI analysis, messaging, analytics, marketing, data processing, AI use, and sharing personal information with our service providers - including two-party call-recording consent in states that require it and TCPA-compliant prior express written consent before placing calls or sending messages using an automatic telephone dialing system or artificial or prerecorded voice;",
      "honor opt-out, stop, revocation-of-consent, and privacy-rights requests you or we receive from any individual in connection with your use of the Services;",
      "determine whether the Services are appropriate for any regulated, safety-critical, consumer-protection, employment, healthcare, financial, insurance, housing, legal, or other high-risk use case;",
      "maintain human review and escalation processes whenever required for your business or legal obligations.",
    ],
  },
  {
    id: "ai-services",
    title: "4. AI and automation disclaimers",
    paragraphs: [
      "The Services may generate or facilitate AI outputs, suggested responses, call summaries, extracted information, automations, and other machine-generated content. AI systems are probabilistic and may produce content that is inaccurate, incomplete, misleading, out of date, offensive, unauthorized, or unsuitable for your use case.",
      "You are solely responsible for reviewing, validating, approving, and deciding whether to use any AI output before it is relied on, communicated, published, actioned, or used to make a decision. You must not treat AI output as legal, financial, accounting, tax, medical, employment, compliance, or other professional advice.",
      `${TERMS_COMPANY_NAME} is not responsible for any statement, omission, promise, quote, schedule, guarantee, recommendation, summary, classification, or representation generated by an AI model, configured by you, or delivered through your workflows, even if the content appears to come from the Services.`,
    ],
  },
  {
    id: "customer-responsibility",
    title: "5. Business responsibility and no agency",
    paragraphs: [
      "You remain solely responsible for your business operations, customer relationships, products, services, offers, fulfillment, advertising, sales practices, support practices, disputes, refunds, chargebacks, taxes, employment matters, regulatory compliance, and all other consequences of your use of the Services.",
      "The Services act only as a tool that you control. Nothing in these Terms creates any partnership, joint venture, fiduciary duty, agency, brokerage, employment, or representative relationship between you and us. The Services do not have authority to bind us, and they only bind you if you choose to configure or use them that way.",
    ],
  },
  {
    id: "third-party-services",
    title: "6. Third-party services and dependencies",
    paragraphs: [
      "The Services may interoperate with or depend on third-party services, including AI model providers, telephony providers, cloud providers, integrations, and customer-owned systems. Those third parties are not our subcontractors unless expressly stated otherwise, and their services are subject to their own terms and privacy practices.",
      "We are not responsible for outages, inaccuracies, acts, omissions, content, billing, or failures of third-party services, or for data loss, delay, or corruption caused by third-party systems or your own systems.",
    ],
  },
  {
    id: "acceptable-use",
    title: "7. Restrictions",
    paragraphs: ["You will not, and will not permit others to, use the Services to:"],
    bullets: [
      "violate any law, regulation, industry rule, or third-party right;",
      "process, solicit, or make decisions in high-risk contexts without legally required safeguards and qualified human review;",
      "submit unlawful, infringing, deceptive, defamatory, harassing, discriminatory, or malicious content or instructions;",
      "circumvent security, probe or scan the Services, interfere with platform integrity, or introduce malware or abusive traffic;",
      "reverse engineer, decompile, or attempt to derive source code or underlying components except to the limited extent such restriction is prohibited by law.",
    ],
  },
  {
    id: "data",
    title: "8. Your data",
    paragraphs: [
      'You are responsible for the legality, accuracy, quality, and rights clearance of all data, prompts, recordings, transcripts, content, customer information, and other materials you or your users submit to or process through the Services ("Customer Data").',
      "You represent and warrant that you have all rights, notices, consents, and lawful bases required to provide Customer Data to us and to authorize us and our service providers to process it in connection with the Services.",
    ],
  },
  {
    id: "privacy",
    title: "9. Privacy and data protection",
    paragraphs: [
      `Our Privacy Policy, available at /privacy, describes how we collect, use, and disclose personal information in connection with the Services and is incorporated into these Terms by reference. By using the Services, you acknowledge that personal information will be processed as described in the Privacy Policy and in accordance with applicable law.`,
      'When you use the Services to process personal information about your own customers, leads, employees, or other individuals ("End-User Personal Information"), you are the "business," "controller," or "data controller," and we act as your "service provider," "processor," or "contractor" under applicable U.S. state privacy laws, including the California Consumer Privacy Act, the Iowa Consumer Data Protection Act, and comparable laws of other states. We will process End-User Personal Information only on your documented instructions and only for the business purposes of providing the Services, and we will not sell End-User Personal Information, share it for cross-context behavioral advertising, use it for targeted advertising, or combine it with personal information from other sources, except as permitted under CCPA § 1798.140(ag)(1) and comparable provisions of other state privacy laws.',
      "You are responsible for maintaining your own privacy notice, providing required disclosures to individuals about your use of the Services (including AI processing, call recording, and messaging), obtaining and documenting required consents, and responding to privacy-rights requests made to you. Where you direct us to assist with a privacy-rights request, we will provide reasonable cooperation consistent with your instructions and applicable law.",
      "Nothing in these Terms limits any non-waivable rights individuals may have under federal or state privacy laws.",
    ],
  },
  {
    id: "sms",
    title: "10. Messaging program terms (SMS/MMS)",
    paragraphs: [
      "This Section 10 sets out the messaging program terms that apply when you opt in to receive text messages from Scene Shift or when Scene Shift or a Scene Shift business customer sends text messages to you through the Services. These terms are intended to meet the US carrier and industry standards published by the wireless carriers and their messaging partners for short code, toll-free, and 10DLC messaging programs, including the industry standards described by Twilio at https://help.twilio.com/articles/223134847-Industry-standards-for-US-Short-Code-Terms-of-Service.",
      'Program name: Scene Shift Customer Portal and Scene Shift Voice & Messaging Services (the "Messaging Program").',
      "Program description: When you opt in, Scene Shift sends transactional and service-related text messages to the mobile phone number you provide. Typical message types include account verification codes, security alerts, appointment and booking confirmations, reminders, scheduling updates, delivery or service notifications, follow-ups from voice or chat interactions you initiated, and customer-support replies. Scene Shift business customers may use the Services to send similar service-related messages to their own end users; those messages are sent by the business customer, and the business customer is the sender responsible for program content and compliance.",
      "Message frequency: Message frequency varies based on your account activity, the automations you configure, and the businesses you interact with. A typical user should not expect more than a reasonable number of messages per transaction, event, or interaction that you have requested. We do not send recurring marketing broadcasts through the Messaging Program.",
      "Message and data rates: Message and data rates may apply. The specific amount depends on your mobile carrier plan. Scene Shift does not charge a separate fee for participating in the Messaging Program, but your carrier may charge you for sending or receiving messages according to your plan.",
      "Carriers: Supported carriers include all major US wireless carriers. Carriers are not liable for delayed or undelivered messages.",
      "Support and customer care: For help with the Messaging Program, contact us through the support channel associated with your Scene Shift account or through the help or privacy contact address published on our website. You can also reply HELP to any message from the Messaging Program to receive our contact information by reply text.",
    ],
    paragraphsHtml: [
      'Opt-in instructions: To opt in to the Messaging Program, text <strong>START</strong> to the short code, toll-free number, or 10DLC number associated with your Scene Shift AI Assistant, or enable messaging in your Scene Shift account settings. After you opt in, you will receive a confirmation message in substantially the following form: <em>"SceneShift: You are now opted-in to receive notifications from your SceneShift AI Assistant on your phone. For help, reply <strong>HELP</strong>. To opt-out, reply <strong>STOP</strong>"</em>. By opting in you consent to receive text messages from the Messaging Program to the mobile number you provided.',
      "Opt-out instructions: You can cancel the Messaging Program at any time. Text <strong>STOP</strong> to the short code, toll-free number, or 10DLC number that sent you the message. After you send <strong>STOP</strong> we will send you one confirmation message and then stop sending you messages from that program. If you want to join again, text <strong>START</strong> to the same number or sign up as you did the first time, and we will start sending messages to you again.",
      "Help instructions: For help at any time, text <strong>HELP</strong> to the short code, toll-free number, or 10DLC number that sent you the message, and we will reply with our customer-care contact information. You may also contact support through the channels described above.",
      "Keyword summary: The Messaging Program recognizes the following keywords - <strong>START</strong> to opt in, <strong>STOP</strong> to opt out, and <strong>HELP</strong> for support. These keywords are not case-sensitive.",
      "Carrier disclosures: T-Mobile is not liable for delayed or undelivered messages. You must have a two-way SMS-capable device on a supported carrier to participate. We do not guarantee that messages will be delivered in a timely manner, and delivery depends on your carrier, device, and network conditions.",
      'No mobile-originated data sharing for marketing: Mobile phone numbers, opt-in status, and messaging consent collected for the Messaging Program are not shared with third parties or affiliates for their marketing or promotional purposes, and are not sold. See our <a href="/privacy">Privacy Policy</a> for details on how messaging data is used and protected.',
      'Further reading: For the US carrier and aggregator industry standards that these messaging terms are modeled on, see <a href="https://help.twilio.com/articles/223134847-Industry-standards-for-US-Short-Code-Terms-of-Service" target="_blank" rel="noopener noreferrer">Twilio - Industry standards for US Short Code Terms of Service</a>.',
    ],
  },
  {
    id: "ip",
    title: "11. Ownership and license",
    paragraphs: [
      `As between the parties, ${TERMS_COMPANY_NAME} and its licensors retain all right, title, and interest in and to the Services, software, documentation, usage data, and related intellectual property. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable right to access and use the Services during the applicable subscription period for your internal business purposes.`,
      "Except for the limited rights expressly granted in these Terms, no rights are granted by implication, estoppel, or otherwise.",
    ],
  },
  {
    id: "warranties",
    title: "12. Disclaimer of warranties",
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED "AS IS," "AS AVAILABLE," AND WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL EXPRESS, IMPLIED, STATUTORY, AND OTHER WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, AND THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS.',
      "WE DO NOT WARRANT THAT AI OUTPUTS, AUTOMATIONS, SUMMARIES, CLASSIFICATIONS, EXTRACTED DATA, OR COMMUNICATIONS GENERATED THROUGH THE SERVICES WILL BE CORRECT, COMPLETE, AUTHORIZED, OR SUITABLE FOR YOUR NEEDS.",
    ],
  },
  {
    id: "liability",
    title: "13. Limitation of liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL SCENE SHIFT OR ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, OFFICERS, DIRECTORS, EMPLOYEES, OR CONTRACTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, BUSINESS, CONTRACTS, GOODWILL, DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO THE SERVICES OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF THOSE DAMAGES.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO US FOR THE SERVICES IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US$100), IF YOU HAVE NOT PAID US ANY FEES.",
      "SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OR EXCLUSIONS. IN THOSE JURISDICTIONS, THE FOREGOING LIMITATIONS APPLY ONLY TO THE MAXIMUM EXTENT PERMITTED BY LAW.",
    ],
  },
  {
    id: "indemnity",
    title: "14. Indemnification",
    paragraphs: [
      "You will defend, indemnify, and hold harmless Scene Shift, its affiliates, and their respective personnel from and against any claims, demands, actions, proceedings, damages, judgments, settlements, penalties, fines, losses, liabilities, costs, and expenses, including reasonable attorneys' fees, arising out of or related to: (a) your business, products, or services; (b) your use of the Services; (c) Customer Data; (d) your prompts, configurations, instructions, workflows, or automations; (e) statements or commitments made to any person through your use of the Services; or (f) your violation of these Terms or applicable law.",
    ],
  },
  {
    id: "suspension",
    title: "15. Suspension and termination",
    paragraphs: [
      "We may suspend, restrict, or terminate access to the Services at any time, with or without notice, if we reasonably believe there is security risk, misuse, legal exposure, nonpayment, suspected fraud, infringement, or a violation of these Terms, or if required by law or a third-party provider.",
      "You may stop using the Services at any time. Upon termination, your right to use the Services ends immediately, but provisions that by their nature should survive will survive, including ownership, disclaimers, limitations of liability, indemnity, payment obligations, dispute terms, and general provisions.",
    ],
  },
  {
    id: "changes",
    title: "16. Changes to the terms",
    paragraphs: [
      `We may update these Terms from time to time. If we do, we will post the updated version in the Services and update the effective date and version. When legally required or when we determine it is appropriate, we may provide additional notice. Your continued use of the Services after the updated Terms become effective, or your click to accept the updated Terms, constitutes acceptance of the revised Terms.`,
    ],
  },
  {
    id: "governing-law",
    title: "17. Governing law and venue",
    paragraphs: [
      "These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws principles. Subject to applicable law, the state and federal courts located in Delaware will have exclusive jurisdiction over disputes arising out of or relating to these Terms or the Services, and each party consents to personal jurisdiction and venue in those courts.",
      "Nothing in this section limits any non-waivable statutory right you have under the laws of your state of residence, including consumer-protection and privacy laws. If any provision of this section is held unenforceable against a consumer in a particular jurisdiction, that provision will be modified to the minimum extent necessary to be enforceable in that jurisdiction, and the remaining provisions will continue in full force and effect.",
    ],
  },
  {
    id: "general",
    title: "18. General",
    paragraphs: [
      "If any provision of these Terms is held unenforceable, the remaining provisions will remain in full force and effect. Our failure to enforce any provision is not a waiver. You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, reorganization, or sale of assets.",
      `Questions about these Terms may be directed through the support channel associated with your ${TERMS_COMPANY_NAME} account or agreement.`,
    ],
  },
];

function nonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

export function normalizeTermsAcceptance(value: unknown): TermsAcceptanceRecord | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const termsVersion = nonEmptyString(record["termsVersion"]);
  const acceptedAt = nonEmptyString(record["acceptedAt"]);
  const acceptanceMethod = nonEmptyString(record["acceptanceMethod"]);

  if (!termsVersion || !acceptedAt) return null;
  if (acceptanceMethod !== "signup_clickwrap" && acceptanceMethod !== "in_app_clickwrap") return null;

  return {
    termsVersion,
    acceptedAt,
    acceptanceMethod,
    ipAddress: nonEmptyString(record["ipAddress"]),
    userAgent: nonEmptyString(record["userAgent"]),
  };
}

export function hasAcceptedCurrentTerms(value: unknown): boolean {
  return normalizeTermsAcceptance(value)?.termsVersion === CURRENT_TERMS_VERSION;
}

export function getTermsStatus(value: unknown): TermsStatus {
  const acceptance = normalizeTermsAcceptance(value);
  return {
    currentTermsVersion: CURRENT_TERMS_VERSION,
    currentTermsEffectiveDate: CURRENT_TERMS_EFFECTIVE_DATE,
    acceptedTermsVersion: acceptance?.termsVersion ?? null,
    acceptedTermsAt: acceptance?.acceptedAt ?? null,
    isCurrentTermsAccepted: acceptance?.termsVersion === CURRENT_TERMS_VERSION,
  };
}
