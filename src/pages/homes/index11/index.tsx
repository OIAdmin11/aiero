import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import { getPageMetadata } from "@/data/pages";

import AboutUsSec7 from "@/components/homes/home-11/AboutUsSec7";
import FeatureStyle1 from "@/components/homes/home-11/FeatureStyle1";
import HeroStyle11 from "@/components/homes/home-11/HeroStyle11";
import NeuralPlayground2 from "@/components/homes/home-11/NeuralPlayground2";
import PartnersSec from "@/components/homes/home-11/PartnersSec";
import PartnersSec2 from "@/components/homes/home-11/PartnersSec2";
import ProjectSec5 from "@/components/homes/home-11/ProjectSec5";
import ServiceSec17 from "@/components/homes/home-11/ServiceSec17";
import TeamSection from "@/components/homes/home-11/TeamSection";
import TestimonialSec2 from "@/components/homes/home-11/TestimonialSec2";

export default function Page() {
  getPageMetadata("home11");

  return (
    <>
      <>
        {/* New Mobile Menu */}
        {/*======== Header ========*/}
        <Header3 stickyClass="sticky-active v2 is-sticky" />
        {/*======== / Header ========*/}
        <HeroStyle11 />
        <PartnersSec />
        <ServiceSec17 />
        <AboutUsSec7 />
        <NeuralPlayground2 />
        <FeatureStyle1 />
        <ProjectSec5 />
        <TeamSection />
        <TestimonialSec2 />
        <PartnersSec2 />
        <Footer3 />
      </>
    </>
  );
}
