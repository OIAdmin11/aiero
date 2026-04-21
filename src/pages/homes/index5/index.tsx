import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import { getPageMetadata } from "@/data/pages";

import BlogSec from "@/components/homes/home-5/BlogSec";
import ContactBanner from "@/components/homes/home-5/ContactBanner";
import ChooseUsSec4 from "@/components/homes/home-5/ChooseUsSec4";
import FaqSec from "@/components/homes/home-5/FaqSec";
import FeatureSec6 from "@/components/homes/home-5/FeatureSec6";
import FeatureStyle2 from "@/components/homes/home-5/FeatureStyle2";
import HeroStyle5 from "@/components/homes/home-5/HeroStyle5";
import NeuralPlayground from "@/components/homes/home-5/NeuralPlayground";
import PartnersSec from "@/components/homes/home-5/PartnersSec";
import PricingSec from "@/components/homes/home-5/PricingSec";
import ServiceSec10 from "@/components/homes/home-5/ServiceSec10";
import TestimonialsSec from "@/components/homes/home-5/TestimonialsSec";

export default function Page() {
  getPageMetadata("home5");

  return (
    <>
      <div className="wrapper">
        <Header1
          className="vs-header5"
          stickyClass="sticky-active is-sticky"
          menuClass="header-menu-area5"
          stickyMenuClass="header-menu-area"
        />
        {/*======== / Header ========*/}
        {/* hero-style5 */}
        <HeroStyle5 />
        {/* End hero-style5 */}
        {/* feature-style2 */}
        <FeatureStyle2 />
        {/* End feature-style2 */}
        {/* neural-playground */}
        <NeuralPlayground />
        {/* End neural-playground */}
        {/* service-sec10 */}
        <ServiceSec10 />
        {/* End service-sec10 */}
        {/* Feature-sec6 */}
        <FeatureSec6 />
        {/* End Feature-sec6 */}
        {/* choose-us-sec4 */}
        <ChooseUsSec4 />
        {/* End choose-us-sec4 */}
        {/* pricing-sec */}
        <PricingSec />
        {/* End pricing-sec */}
        {/* testimonials-sec */}
        <TestimonialsSec />
        {/* End testimonials-sec */}
        {/* faq-sec */}
        <FaqSec />
        {/* End faq-sec */}
        {/* blog-sec */}
        <BlogSec />
        {/* End blog-sec */}
        {/* partners-sec */}
        <PartnersSec />
        {/* End partners-sec */}
        {/* contact-banner */}
        <ContactBanner />
        {/* End contact-banner */}
        {/* footer-style2 */}
        <Footer2 />
        {/* footer-style12 */}
        {/* Scroll Button */}
      </div>
    </>
  );
}
