import React from "react";

const DtdcDomestic = () => {
  return (
    <>
      <svg viewBox="0 0 1440 120" width="100%" height="100%" fill="black">
        <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
      </svg>
      <section className="mt-8 bg-black">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="border border-2 rounded-3 py-5 px-4 px-md-5 px-md-6 px-lg-8 text-center border-900">
                <h1 className="my-5 fs-1 fs-md-4 fs-lg-5 fs-xl-6 fw-light text-white">
                  DTDC DOMESTIC & INTERNATIONAL COURIER SERVICES
                </h1>

                <div className="row contact">
                  {[
                    "Free Door Pickup",
                    "Lowest Price",
                    "Door to Door Delivery",
                    "Express Delivery",
                    "Next Day Delivery",
                  ].map((item, index) => (
                    <div className="col-lg-4 my-4" key={index}>
                      <div
                        className="info-item d-flex aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <i className="bi bi-airplane-engines-fill flex-shrink-0" />
                        <div>
                          <h2 className="text-left text-white">{item}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DtdcDomestic;
