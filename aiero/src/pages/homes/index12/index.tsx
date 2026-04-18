import Header1 from "@/components/headers/Header1";
import FeatureStyle1 from "@/components/homes/home-12/FeatureStyle1";
import { getPageMetadata } from "@/data/pages";

import HeroStyle12 from "@/components/homes/home-12/HeroStyle12";
import LanuguageSec from "@/components/homes/home-12/LanuguageSec";

import MarqueeSec from "@/components/homes/home-12/MarqueeSec";
import NeuralPlayground from "@/components/homes/home-12/NeuralPlayground";
import PartnersSec from "@/components/homes/home-12/PartnersSec";
import PricingSec from "@/components/homes/home-12/PricingSec";
import ProjectSec6 from "@/components/homes/home-12/ProjectSec6";
import ServiceSec18 from "@/components/homes/home-12/ServiceSec18";
import TestimonialSec2 from "@/components/homes/home-12/TestimonialSec2";
import Services1 from "@/components/services/Services1";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";

export default function Page() {
  getPageMetadata("home12");

  return (
    <>
      <>
        <Header1 className="vs-header12" menuClass="header-menu-area3" />
        <HeroStyle12 />
        <ServiceSec18 />
        <NeuralPlayground />
        <MarqueeSec />
        <FeatureStyle1 />
        <Services1 parentClass="service-sec18" />
        <ProjectSec6 />
        <LanuguageSec />
        <PricingSec />
        <TestimonialSec2 />
        <PartnersSec />
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
      </>
    </>
  );
}
