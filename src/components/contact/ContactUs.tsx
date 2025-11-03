import React from "react";
import InnerPageHead from "../common/InnerPageHead";

const ContactUs = () => {
  return (
    <>
      <InnerPageHead pageName="Contact" parentPage="Home">
        <div className="container mt-5">
          Thank you for choosing Brothers International for your courier needs.
          We value your trust and are always here to support you. Please contact
          us for any questions, service requests, or feedback. Our dedicated
          customer service representatives will respond promptly to make sure
          your experience with us is smooth and satisfying.
        </div>
      </InnerPageHead>
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <h4 className="mb-4">Main Office</h4>
          <div className="row gy-4 mb-5">
            <div className="col-lg-5">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address </h3>
                  <p>
                    UG-2, Mohta Building, 4 Bhikaji Cama Place, New Delhi-110066
                  </p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>011-46591190, 9311778585</p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>csd@brothersinternational.in, bcpug3sdl@fr.dtdc.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
            <iframe
              style={{ border: 0, width: "100%", height: 270 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0472649243043!2d77.18635697547091!3d28.56834338699266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d86a87c0001%3A0x2bc418beb113287!2sBROTHER&#39;S%20INTERNATIONAL!5e0!3m2!1sen!2sin!4v1762079477982!5m2!1sen!2sin"
              frameBorder={0}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <hr className="my-3" />

          <section>
            <h4 className="mb-4">Badarpur Office</h4>
            <div className="row gy-4 mb-5">
              <div className="col-lg-5">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>
                      Shop No-2, Dharamveer Market, Near Sibal Cinema, Badarpur,
                      New Delhi-110044
                    </p>
                  </div>
                </div>
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>9643263181, 9311778585</p>
                  </div>
                </div>
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>badarpur1@fr.dtdc.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
              <iframe
                style={{ border: 0, width: "100%", height: 270 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0472649243043!2d77.18635697547091!3d28.56834338699266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d86a87c0001%3A0x2bc418beb113287!2sBROTHER&#39;S%20INTERNATIONAL!5e0!3m2!1sen!2sin!4v1762079477982!5m2!1sen!2sin"
                frameBorder={0}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
