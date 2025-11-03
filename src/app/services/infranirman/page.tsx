import React from "react";
import InnerPageHead from "@/components/common/InnerPageHead";
import Image from "next/image";

const InfranirmanService = () => {
  return (
    <>
      {/* <InnerPageHead
        pageName="Infra Nirman"
        parentPage="Services"
        parentLink="/services"
      /> */}

      <div className="relative">
        <Image
          src="/images/carousel/banner-infra.jpg"
          className="relative"
          alt="Infra nirman"
          width="1920"
          height="1129"
          style={{ width: "100%" }}
        />
      </div>
      <section>
        <div className="container">
          <p>
            At Brothers International Infra Nirman, we build more than just
            structures — we build trust, strength, and a better tomorrow. Our
            expertise covers every aspect of construction and infrastructure
            development, from concept to completion, with a focus on quality,
            innovation, and long-term sustainability. With years of experience
            and a team of skilled professionals, we deliver residential,
            commercial, industrial, and public infrastructure projects that
            stand the test of time.
          </p>
        </div>
      </section>
    </>
  );
};

export default InfranirmanService;
