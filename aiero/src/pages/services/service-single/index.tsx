import { Link } from "react-router-dom";
import ServiceDetails from "@/components/services/ServiceDetails";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("service-single");

  return (
    <>
      <section className="page-banner4">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Neural</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ Artificial Intelligence (AI) systems /</h1>
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
            <Link to={`/service`} title="">
              Services
            </Link>
          </li>
          <li>/</li>
          <li>Artificial Intelligence (AI) systems</li>
        </ul>
      </section>
      <ServiceDetails />
    </>
  );
}
