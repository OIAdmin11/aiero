import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import { getPageMetadata } from "@/data/pages";

import BlogSec2 from "@/components/homes/home-8/BlogSec2";
import ContactBanner from "@/components/homes/home-8/ContactBanner";
import ChooseUsSec2 from "@/components/homes/home-8/ChooseUsSec2";
import FeatureSec7 from "@/components/homes/home-8/FeatureSec7";
import Hero from "@/components/homes/home-8/Hero";
import MainSection2 from "@/components/homes/home-8/MainSection2";
import MarqueeSec from "@/components/homes/home-8/MarqueeSec";
import NeuralPlayground2 from "@/components/homes/home-8/NeuralPlayground2";
import PartnersSec from "@/components/homes/home-8/PartnersSec";
import ServiceSec12 from "@/components/homes/home-8/ServiceSec12";
import TeamSection from "@/components/homes/home-8/TeamSection";
import TestimonialSec2 from "@/components/homes/home-8/TestimonialSec2";

export default function Page() {
  getPageMetadata("home8");

  return (
    <>
      <div className="wrapper">
        {/* End Preloader */}
        {/* search-popup */}
        {/* Side Menu */}
        <Header1
          hasLogin
          className="vs-header2 v8"
          stickyClass="sticky-active v3 is-sticky"
        />
        {/*======== / Header ========*/}
        <Hero />
        <ServiceSec12 />
        <FeatureSec7 />
        <NeuralPlayground2 />
        <MarqueeSec />
        <MainSection2 />
        <ChooseUsSec2 />
        <TeamSection />
        <TestimonialSec2 />
        <BlogSec2 />
        <PartnersSec />
        <ContactBanner />
        <Footer2 />
      </div>
    </>
  );
}
