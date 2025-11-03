"use client";

import Image from "next/image";
import Link from "next/link";
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
            {/* <Image src="/images/carousel/hero-carousel-1.jpg" alt="" fill /> */}
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
          <div className="carousel-item">
            <Image src="/images/carousel/hero-carousel-2.jpg" alt="" fill />
            <div className="carousel-container">
              <h2>
                Provides services for Express Parcel, International, and
                E-commerce
              </h2>
              <p>
                From first-mile pickup to last-mile delivery, we provide
                end-to-end logistics support that ensures every parcel reaches
                your customers quickly and safely.
              </p>
              <a href="#featured-services" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="/images/carousel/infra.jpg" alt="" fill />
            <div className="carousel-container">
              <h2>🏗️ Infra Nirman & Construction Services</h2>
              <p>
                With years of experience and a team of skilled professionals, we
                deliver residential, commercial, industrial, and public
                infrastructure projects that stand the test of time.
              </p>
              <Link href="/services/infranirman" className="btn-get-started">
                Get Started
              </Link>
            </div>
          </div>
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
