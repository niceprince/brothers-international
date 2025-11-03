import Link from "next/link";
import React, { ReactElement } from "react";

type InnerPageHeadProps = {
  pageName: string;
  parentPage: string;
  parentLink?: string;
  children?: string | ReactElement;
};

const InnerPageHead: React.FC<InnerPageHeadProps> = ({
  pageName,
  parentPage,
  parentLink = "/",
  children,
}) => {
  return (
    <>
      {" "}
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{pageName}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href={parentLink}>{parentPage}</Link>
              </li>
              <li className="current">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
      {children ?? children}
    </>
  );
};

export default InnerPageHead;
