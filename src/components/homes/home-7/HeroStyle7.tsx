import { Link } from "react-router-dom";

export default function HeroStyle7() {
  return (
    <section className="hero-style7">
      <div className="container2">
        <div className="hero-content7">
          <h1 className="title">
            <span>Aiero</span> is future
          </h1>
          <p>
            Convert text to natural-sounding speech. Customizable, multilingual,
            and high-quality audio output.
          </p>
          <Link to={`/index7`} className="ibt-btn ibt-btn-secondary">
            <span>Discover</span>
            <i className="icon-arrow-top" />
          </Link>
        </div>
      </div>
    </section>
  );
}
