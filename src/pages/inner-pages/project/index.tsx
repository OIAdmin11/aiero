import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Pagination from "@/components/common/Pagination";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("project");

  return (
    <>
      <>
        {/* page-banner */}
        <section className="page-banner5">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Neural</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Projects grid /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Projects grid</li>
          </ul>
        </section>
        {/* End page-banner */}
        {/* service-sec11 */}
        <section className="service-sec21 ibt-section-gap">
          <div className="container">
            <div className="row">
              {projects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6">
                  <div className={project.cardClassName ?? "ser-card21"}>
                    <a
                      href="#"
                      title=""
                      className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
                    >
                      <span>{project.category}</span>
                    </a>
                    <div className="empty2">
                      <div className="ser-content21">
                        <h4 className="title">
                          <Link to={`/project-single`} title="">
                            {project.title}
                          </Link>
                        </h4>
                        <p>{project.description}</p>
                        <Link
                          to={`/project-single`}
                          title=""
                          className="ser-btn3"
                        >
                          Explore more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              totalPages={3}
              currentPage={1}
              basePath="/project"
              ulClassName="pagination"
            />
          </div>
        </section>
        {/* End service-sec11 */}
      </>
    </>
  );
}
