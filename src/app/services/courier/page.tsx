import Image from "next/image";
import React from "react";
import InnerPageHead from "@/components/common/InnerPageHead";

const CourierService = () => {
  return (
    <>
      <InnerPageHead
        pageName="Courier Services"
        parentPage="Services"
        parentLink="/services"
      />
      <div className="relative">
        <Image
          src="/images/carousel/banners1.jpg"
          className="relative"
          alt="Infra nirman"
          width="1920"
          height="1129"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
};

export default CourierService;
