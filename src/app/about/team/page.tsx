import InnerPageHead from "@/components/common/InnerPageHead";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <>
      <InnerPageHead pageName="Team" parentPage="About" parentLink="/about" />
      <section id="team" className="team section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/images/profile.jpg"
                    className="img-fluid"
                    width="150"
                    height="150"
                    alt="Profile"
                  />
                </div>
                <div className="member-info">
                  <h4>Rohan Singh</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
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
                      {" "}
                      <i className="bi bi-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/images/profile.jpg"
                    className="img-fluid"
                    width="150"
                    height="150"
                    alt="Profile image"
                  />
                </div>
                <div className="member-info">
                  <h4>Rohan Singh</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div className="social">
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
                      {" "}
                      <i className="bi bi-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/images/profile.jpg"
                    className="img-fluid"
                    width="150"
                    height="150"
                    alt="Profile"
                  />
                </div>
                <div className="member-info">
                  <h4>Rohan Singh</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div className="social">
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
                      {" "}
                      <i className="bi bi-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <Image
                    src="/images/profile.jpg"
                    className="img-fluid"
                    width="150"
                    height="150"
                    alt="Profile"
                  />
                </div>
                <div className="member-info">
                  <h4>Rohan Singh</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div className="social">
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
                      {" "}
                      <i className="bi bi-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
