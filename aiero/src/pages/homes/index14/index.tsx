import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import { getPageMetadata } from "@/data/pages";

import AboutUsSec5 from "@/components/homes/home-14/AboutUsSec5";
import BlogSec from "@/components/homes/home-14/BlogSec";
import FaqSec from "@/components/homes/home-14/FaqSec";
import FeatureSec8 from "@/components/homes/home-14/FeatureSec8";
import FeatureSec9 from "@/components/homes/home-14/FeatureSec9";
import HeroStyle9 from "@/components/homes/home-14/HeroStyle9";
import NeuralPlayground from "@/components/homes/home-14/NeuralPlayground";
import PartnersSec from "@/components/homes/home-14/PartnersSec";
import ProjectSec7 from "@/components/homes/home-14/ProjectSec7";
import ServiceBanner from "@/components/homes/home-14/ServiceBanner";
import ServiceSec20 from "@/components/homes/home-14/ServiceSec20";

export default function Page() {
  getPageMetadata("home14");

  return (
    <>
      <>
        <Header1
          navClass="main-menu menu-style1 v4"
          hasNumber
          className="vs-header14"
          stickyClass="sticky-active v14 is-sticky"
        />
        {/*======== / Header ========*/}
        <HeroStyle9 />
        <ServiceSec20 />
        <NeuralPlayground />
        <ProjectSec7 />
        <AboutUsSec5 />
        <FeatureSec8 />
        <FeatureSec9 />
        <ServiceBanner />
        <FaqSec />
        <BlogSec />
        <PartnersSec />
        <Footer4 />
      </>
    </>
  );
}
