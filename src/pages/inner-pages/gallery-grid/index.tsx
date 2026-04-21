import { Link } from "react-router-dom";
import GalleryGrid from "@/components/others-pages/GalleryGrid";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("gallery-grid");

  return (
    <>
      <>
        {/* page-banner8 */}
        <section className="page-banner8">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Shots</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Gallery Grid/</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Gallery Grid</li>
          </ul>
        </section>
        {/* End page-banner8 */}
        <GalleryGrid />
      </>
    </>
  );
}
