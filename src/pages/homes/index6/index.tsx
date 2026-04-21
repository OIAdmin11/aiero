import Header4 from "@/components/headers/Header4";
import { getPageMetadata } from "@/data/pages";

import ChooseUsSec from "@/components/homes/home-6/ChooseUsSec";
import FaqSec from "@/components/homes/home-6/FaqSec";
import FaqSec2 from "@/components/homes/home-6/FaqSec2";
import FeatureStyle1 from "@/components/homes/home-6/FeatureStyle1";
import FunFactSec from "@/components/homes/home-6/FunFactSec";
import HeroStyle2 from "@/components/homes/home-6/HeroStyle2";

import MarqueeSec from "@/components/homes/home-6/MarqueeSec";
import PricingStyle1 from "@/components/homes/home-6/PricingStyle1";
import ServiceSec2 from "@/components/homes/home-6/ServiceSec2";
import TeamSection from "@/components/homes/home-6/TeamSection";
import TestimonialSec2 from "@/components/homes/home-6/TestimonialSec2";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";

export default function Page() {
  getPageMetadata("home6");

  return (
    <>
      <div className="wrapper">
        <Header4
          className="vs-header6"
          menuClass="header-menu-area m-0"
          headerBottomClass="header-bottom2"
          navClass="main-menu menu-style1"
        />
        {/*======== / Header ========*/}
        <HeroStyle2 />
        <FunFactSec />
        <ServiceSec2 />
        <MarqueeSec />
        <ChooseUsSec />
        <FeatureStyle1 />
        <FaqSec />
        <FaqSec2 />
        <TestimonialSec2 />
        <PricingStyle1 />
        <TeamSection />
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
      </div>
    </>
  );
}
