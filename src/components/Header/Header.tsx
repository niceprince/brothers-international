import React from "react";
import TopSection from "@/components/Header/TopSection";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <TopSection />
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link
            href="index.html"
            className="logo d-flex align-items-center me-auto"
          >
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            {/* <h1 className="sitename">Brothers International</h1> */}
            <Image
              src="/images/logo.jpeg"
              alt="Brothers International"
              width="100"
              height="90"
              style={{ width: "100px", height: "auto", maxHeight: "auto" }}
            />
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <Link href="/about">
                  <span>About</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </Link>
                <ul>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="#">Others</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/services">
                  <span>Services</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </Link>
                <ul>
                  <li>
                    <Link href="/courier">Courier Service</Link>
                  </li>
                  <li>
                    <Link href="Infra Nirman">Infra Nirman</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <Link className="btn-getstarted" href="about.html">
            Get Started
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
