import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import { getPageMetadata } from "@/data/pages";

import BlogSec2 from "@/components/homes/home-13/BlogSec2";
import FaqSec3 from "@/components/homes/home-13/FaqSec3";
import FeatureStyle1 from "@/components/homes/home-13/FeatureStyle1";
import MainSec5 from "@/components/homes/home-13/MainSec5";
import PartnersSec from "@/components/homes/home-13/PartnersSec";
import ServiceSec15 from "@/components/homes/home-13/ServiceSec15";
import TeamSection from "@/components/homes/home-13/TeamSection";
import TestimonialSec2 from "@/components/homes/home-13/TestimonialSec2";

export default function Page() {
  getPageMetadata("home13");

  return (
    <>
      <>
        <Header2
          stickyClass="sticky-active v13 v3 is-sticky"
          SideMenuTogglerClass="menu-toggle v2 "
        />
        {/*======== / Header ========*/}
        <MainSec5 />
        <ServiceSec15 />
        <FeatureStyle1 />
        <TeamSection />
        <FaqSec3 />
        <TestimonialSec2 />
        <BlogSec2 />
        <PartnersSec />
        <Footer3 />
      </>
    </>
  );
}
