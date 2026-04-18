import ContactButton from "@/components/common/ContactButton";

export default function ContactBanner2() {
  return (
    <section className="contact-banner2">
      <div className="container4">
        <div className="row align-items-end">
          <div className="col-lg-9 col-md-9">
            <div className="contact-banner-content2">
              <h2 className="title">
                <span>Innovate, transform</span> &amp; achieve real results with
                Aiero
              </h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="btn-box3">
              <ContactButton
                href="/index3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
