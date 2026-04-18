import { Link } from "react-router-dom";

import Pagination from "@/components/common/Pagination";
import { blogGridPosts } from "@/data/blog";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("blog");

  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Articles</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Blog Grid/</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Blog Grid</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* blog-sec */}
        <section className="blog-sec v2 ibt-section-gap">
          <div className="container">
            <div className="row">
              {blogGridPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6">
                  <div className={post.cardClassName ?? "blog-card"}>
                    <div className="blog-img">
                      <Link to={`/blog-single`}>
                        <img
                          alt="AI Agency & Technology HTML Template"
                          src={post.imageSrc}
                          width={post.imageWidth}
                          height={post.imageHeight}
                        />
                      </Link>
                      <span className="blog-meta">{post.meta}</span>
                    </div>
                    <div className="blog-content">
                      <h4 className="title">
                        <Link to={`/blog-single`} title="">
                          {post.title}
                        </Link>
                      </h4>
                      <span>{post.categoriesLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              totalPages={3}
              currentPage={1}
              basePath="/blog"
              ulClassName="pagination v2"
            />
          </div>
        </section>
        {/* End blog-sec */}
      </>
    </>
  );
}
