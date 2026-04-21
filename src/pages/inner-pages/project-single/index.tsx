import { Link } from "react-router-dom";
import ProjectSingleIntro from "@/components/others-pages/ProjectSingleIntro";
import ProjectSingleVideoBanner from "@/components/others-pages/ProjectSingleVideoBanner";
import ProjectSingleProcess from "@/components/others-pages/ProjectSingleProcess";
import ProjectSingleGallery from "@/components/others-pages/ProjectSingleGallery";
import ProjectSingleFunFacts from "@/components/others-pages/ProjectSingleFunFacts";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("project-single");

  return (
    <>
      {/* page-banner6 */}
      <section className="page-banner6">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Projects</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ DeepVision /</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link to={`/`} title="">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to={`/project`} title="">
              Projects
            </Link>
          </li>
          <li className="items">/</li>
          <li>DeepVision</li>
        </ul>
      </section>
      {/* End page-banner6 */}
      {/* project-single */}
      <ProjectSingleIntro />
      {/* End project-single */}
      {/* video-banner4 */}
      <ProjectSingleVideoBanner />
      {/* End video-banner4 */}
      {/* process-sec */}
      <ProjectSingleProcess />
      {/* End process-sec */}
      {/* project-sec7 */}
      <ProjectSingleGallery />
      {/* End project-sec7 */}
      {/* fun-fact-sec3 */}
      <ProjectSingleFunFacts />
      {/* End fun-fact-sec3 */}
    </>
  );
}
