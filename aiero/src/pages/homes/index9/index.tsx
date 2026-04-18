import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import { getPageMetadata } from "@/data/pages";

import AboutUsSec5 from "@/components/homes/home-9/AboutUsSec5";
import BlogSec from "@/components/homes/home-9/BlogSec";
import ChooseUsSec4 from "@/components/homes/home-9/ChooseUsSec4";
import FaqSec from "@/components/homes/home-9/FaqSec";
import LanuguageSec from "@/components/homes/home-9/LanuguageSec";
import MainSec4 from "@/components/homes/home-9/MainSec4";
import NeuralPlayground from "@/components/homes/home-9/NeuralPlayground";
import PartnersSec from "@/components/homes/home-9/PartnersSec";
import ProjectSec4 from "@/components/homes/home-9/ProjectSec4";
import TestimonialsSec from "@/components/testimonials/TestimonialsSec";

export default function Page() {
  getPageMetadata("home9");

  return (
    <>
      <>
        <Header1
          stickyClass="sticky-active v9 is-sticky"
          className="vs-header9"
          SideMenuTogglerClass="menu-toggle v2 "
        />
        <MainSec4 />
        <LanuguageSec />
        <NeuralPlayground />
        <AboutUsSec5 />
        <ProjectSec4 />
        <LanuguageSec />
        <ChooseUsSec4 />
        <TestimonialsSec />
        <FaqSec />
        <BlogSec />
        <PartnersSec />
        <Footer4 />
      </>
    </>
  );
}
