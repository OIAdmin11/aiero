import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import { getPageMetadata } from "@/data/pages";

import ChooseUs3 from "@/components/homes/home-4/ChooseUs3";
import Blogs from "@/components/homes/home-4/Blogs";
import Features from "@/components/homes/home-4/Features";
import Features4 from "@/components/homes/home-4/Features4";
import Hero from "@/components/homes/home-4/Hero";
import Marquee from "@/components/homes/home-4/Marquee";
import NewsletterBanner from "@/components/homes/home-4/NewsletterBanner";
import Pricing from "@/components/homes/home-4/Pricing";
import Services7 from "@/components/homes/home-4/Services7";
import Services8 from "@/components/homes/home-4/Services8";
import Services9 from "@/components/homes/home-4/Services9";
import Testimonials from "@/components/homes/home-4/Testimonials";
import Faqs from "@/components/homes/home-4/Faqs";

export default function Page() {
  getPageMetadata("home4");

  return (
    <>
      <div className="wrapper">
        <Header4 />
        {/*======== / Header ========*/}
        {/* hero-style4 */}
        <Hero />
        {/* End hero-style4 */}
        {/* service-sec8 */}
        <Services8 />
        {/* End service-sec8 */}
        {/* service-sec7 */}
        <Services7 />
        {/* End service-sec7 */}
        {/* feature-style1 */}
        <Features />
        {/* End feature-style1 */}
        {/* marquee-sec */}
        <Marquee />
        {/* End marquee-sec */}
        {/* feature-style4 */}
        <Features4 />
        {/* End feature-style4 */}
        {/* choose-us-sec3 */}
        <ChooseUs3 />
        {/* End choose-us-sec3 */}
        {/* service-sec9 */}
        <Services9 />
        {/* End service-sec9 */}
        {/* pricing-style1 */}
        <Pricing />
        {/* End pricing-style1 */}
        {/* testimonial-sec2 */}
        <Testimonials />
        {/* End testimonial-sec2 */}
        {/* faq-sec */}
        <Faqs />
        {/* End faq-sec */}
        {/* blog-sec */}
        <Blogs />
        {/* End blog-sec */}
        {/* newsletter-banner */}
        <NewsletterBanner />
        {/* End newsletter-banner */}
        {/* footer-style4 */}
        <Footer3 />
        {/* footer-style4 */}
        {/* Scroll Button */}
      </div>
    </>
  );
}
