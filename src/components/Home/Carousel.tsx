"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    // Optionally ensure Bootstrap JS is available here
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <section id="heroSection" className="hero section dark-background ">
        <div
          id="carouselSection"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval={5000}
        >
          <div className="carousel-item active">
            <Image src="/images/carousel/hero-carousel-1.jpg" alt="" fill />
            <div className="carousel-container">
              <h2>
                Welcome to Brothers International
                <br />
              </h2>
              <p>
                Brothers International is a trusted logistics and courier
                service dedicated to delivering your parcels safely and on time
                across cities and borders. We offer fast, reliable, and
                cost-effective shipping solutions for individuals and
                businesses, ensuring every delivery reaches its destination with
                care and precision.
              </p>
              <a href="#featured-services" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
          {/* End Carousel Item */}
          <div className="carousel-item">
            <Image src="/images/carousel/hero-carousel-2.jpg" alt="" fill />
            <div className="carousel-container">
              <h2>At vero eos et accusamus</h2>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut.
              </p>
              <a href="#featured-services" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
          {/* End Carousel Item */}
          <div className="carousel-item">
            <Image src="/images/carousel/infra.jpg" alt="" fill />
            <div className="carousel-container">
              <h2>Temporibus autem quibusdam</h2>
              <p>
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt omnis iste natus error sit voluptatem accusantium.
              </p>
              <a href="#featured-services" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
          {/* End Carousel Item */}
          <button
            className="carousel-control-prev"
            data-bs-target="#carouselSection"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            />
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#carouselSection"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            />
          </button>
          {/* <ol className="carousel-indicators" /> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselSection"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselSection"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselSection"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
