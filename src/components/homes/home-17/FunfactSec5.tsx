import Counter from "@/components/common/Counter";

export default function FunfactSec5() {
  return (
    <section className="funfact-sec5">
      <div className="container3">
        <div className="funfact-info5">
          <div className="funfact-content5">
            <div className="funfact-count5">
              <div className="counter-box17">
                <Counter max={35} />
                <span className="counter-text">%</span>
              </div>
              <span className="user3">Inbound calls often missed</span>
            </div>
            <div className="funfact-count5 v2">
              <div className="counter-box17">
                <Counter max={15} />
                <span className="counter-text">m</span>
              </div>
              <span className="user3">Discovery call length</span>
            </div>
          </div>
          <h4 className="title">
            Most teams do not have an effort problem; they have a first-response
            speed problem.
          </h4>
        </div>
      </div>
    </section>
  );
}
