import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Brothers International</span>
              </a>
              <div className="footer-contact pt-3">
                <p>UG-2, Mohta Building,</p>
                <p>4 Bhikaji Cama Place, New Delhi-110066</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>011-46591190, 9311778585</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>csd@brothersinternational.in</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/term-of-service">Terms of service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link href="/services/courier">Courier</Link>
                </li>
                <li>
                  <Link href="/services/infranirman">Infra Nirman</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Get In Touch</h4>
              <p>
                Subscribe us to long term bonding and receive the latest update
                about our services!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Brothers International</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          {/* <div className="credits">
            Designed by <a href="https://jsmatrix.in/">JSMatrix</a>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
