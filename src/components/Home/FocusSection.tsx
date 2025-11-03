import Image from "next/image";
import React from "react";

const FocusSection = () => {
  return (
    <section>
      <div className="container marketing">
        {/* Three columns of text below the carousel */}
        <div className="row">
          <div className="col-lg-4 text-center">
            <Image
              className="rounded-circle"
              data-src="holder.js/500x500/auto"
              alt="Express Parcel"
              src="/images/express-parcel.jpg"
              data-holder-rendered="true"
              width="140"
              height="140"
              style={{ width: 140, height: 140 }}
            />
            <h2>Express Parcels</h2>
            <p>
              At Brothers International, we understand that time is critical
              when it comes to urgent deliveries. Our Express Parcel Service is
              designed to provide fast, secure, and reliable delivery solutions
              for your time-sensitive shipments — ensuring they reach their
              destination on schedule, every time.
            </p>
            {/* <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details »
              </a>
            </p> */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4 text-center">
            <Image
              className="rounded-circle"
              data-src="holder.js/500x500/auto"
              alt="International"
              src="/images/international.jpg"
              data-holder-rendered="true"
              width="140"
              height="140"
              style={{ width: 140, height: 140 }}
            />
            <h2>International </h2>
            <p>
              Expand your reach across borders with Brothers International’s
              International Courier Service — your trusted logistics partner for
              global shipping. We specialize in providing fast, secure, and
              cost-effective international deliveries, connecting businesses and
              individuals to destinations around the world.
            </p>
            {/* <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details »
              </a>
            </p> */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4 text-center">
            <Image
              className="rounded-circle"
              data-src="holder.js/500x500/auto"
              alt="Express Parcel"
              src="/images/ecommerce.jpg"
              data-holder-rendered="true"
              width="140"
              height="140"
              style={{ width: 140, height: 140 }}
            />
            <h2>E-Commerce</h2>
            <p>
              At Brothers International, we understand that in today’s digital
              marketplace, fast and reliable delivery is the backbone of every
              successful online business. Our E-Commerce Logistics Solutions are
              designed to help online retailers streamline order fulfillment,
              reduce delivery times, and create exceptional customer
              experiences.
            </p>
            {/* <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details »
              </a>
            </p> */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />
      </div>
    </section>
  );
};

export default FocusSection;
