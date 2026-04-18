import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { blogSectionPosts } from "@/data/blog";

export default function BlogSec() {
  return (
    <section className="blog-sec ibt-section-gap">
      <div className="container">
        <div className="title-area">
          <div className="row end">
            <div className="col-lg-7">
              <div className="sec-title mb-0">
                <SubTitleWrapper>blog</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Exploring the world of artificial intelligence with Aiero
                  blogging
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="sec-btn-box">
                <Link to="/blog" title="" className="ibt-btn ibt-btn-outline">
                  <span>More articles</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogSectionPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className={post.cardClassName ?? "blog-card"}>
                <div className="blog-img">
                  <Link to="/blog-single">
                    <img
                      alt="AI Agency & Technology HTML Template"
                      src={`${post.imageSrc}`}
                      width={post.imageWidth}
                      height={post.imageHeight}
                    />
                  </Link>
                  <span className="blog-meta">{post.meta}</span>
                </div>
                <div className="blog-content">
                  <h4 className="title">
                    <Link to="/blog-single" title="">
                      {post.title}
                    </Link>
                  </h4>
                  <span>{post.categoriesLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
