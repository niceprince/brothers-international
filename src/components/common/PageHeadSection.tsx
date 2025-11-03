import React from "react";

type PageHeadSectionProps = {
  parentLink: string;
  parent: string;
  pageHead: string;
};

const PageHeadSection: React.FC<PageHeadSectionProps> = ({
  parentLink = "index.html",
  parent = "Home",
  pageHead,
}) => {
  return (
    <>
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{pageHead}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href={parentLink}>{parent}</a>
              </li>
              <li className="current">{pageHead}</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default PageHeadSection;
