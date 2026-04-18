import Header4 from "@/components/headers/Header4";

import BlogSec3 from "@/components/homes/home-10/BlogSec3";
import FaqSec from "@/components/homes/home-10/FaqSec";
import FeatureStyle1 from "@/components/homes/home-10/FeatureStyle1";
import HeroSection10 from "@/components/homes/home-10/HeroSection10";

import MainSec3 from "@/components/homes/home-10/MainSec3";
import PricingStyle1 from "@/components/homes/home-10/PricingStyle1";
import ProjectSec from "@/components/homes/home-10/ProjectSec";
import ServiceSec16 from "@/components/homes/home-10/ServiceSec16";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";
import { getPageMetadata } from "@/data/pages";

export default function page() {
  getPageMetadata("home10");

  return (
    <>
      <>
        <Header4
          headerBottomClass="header-bottom2"
          menuClass="header-menu-area m-0"
          navClass="main-menu menu-style1"
          className="vs-header6 v10"
        />
        {/*======== / Header ========*/}
        <HeroSection10 />
        <MainSec3 />
        <FeatureStyle1 />
        <ServiceSec16 />
        <ProjectSec />
        <FaqSec />
        <PricingStyle1 />
        <BlogSec3 />

        {/* Scroll Button */}
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
      </>
    </>
  );
}
