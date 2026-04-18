import { Link } from "react-router-dom";
import GalleryMasonry from "@/components/others-pages/GalleryMasonry";
import { getPageMetadata } from "@/data/pages";
export default function Page() {
  getPageMetadata("gallery-masonry");

  return (
    <>
      <>
        {/* page-banner7 */}
        <section className="page-banner7">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Shots</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Gallery Masonry /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Gallery Masonry</li>
          </ul>
        </section>
        {/* End page-banner7 */}
        <GalleryMasonry />
      </>
    </>
  );
}
