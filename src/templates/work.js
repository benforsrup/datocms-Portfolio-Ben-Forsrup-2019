import React, { useState } from "react";
import Slider from "react-slick";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import classNames from "classnames";
import * as _ from "lodash";
import { Parallax, Background } from "react-parallax";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

export default ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  let sheetStyle = classNames({
    'sheet': true,
    [data.datoCmsWork.shorthand]: true,
  })

  let headerContainer = classNames({
    sheet__headerContainer: true,
    [data.datoCmsWork.shorthand]: true,
    background: !_.isEmpty(data.datoCmsWork.background)
  });

  let headerTitle = classNames({
    sheet__title: true,
    sheet__customHeader:
      data.datoCmsWork.shorthand === "newstag" ||
      data.datoCmsWork.shorthand === "riksdagsviz" ||
      data.datoCmsWork.shorthand === "kex" ||
      data.datoCmsWork.shorthand === "vizstudent" ||
      data.datoCmsWork.shorthand === "vizgapm" ||
      data.datoCmsWork.shorthand === "lightsphere"||
      data.datoCmsWork.shorthand === "jengar" ||
      data.datoCmsWork.shorthand === "badplatser"
  });



  let imageStyle = {
    backgroundImage:
      data.datoCmsWork.background &&
      "url(" + data.datoCmsWork.background.url + ")"
  };

  const images = data.datoCmsWork.gallery.map(({ fluid }) => fluid.src);

  const isMobileApp = !_.isEmpty(data.datoCmsWork.mobileTemplate);

  const hasMobileContent = !_.isEmpty(data.datoCmsWork.mobileContent)

  console.log(isMobileApp);
  return (
    <Layout>
      <article className={sheetStyle}>
        <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
        <div className="sheet__inner">
          <Parallax
            blur={25}
            bgImage={
              data.datoCmsWork.background
                ? data.datoCmsWork.background.url
                : null
            }
            bgImageStyle={{ objectFit: "contain" }}
            bgImageAlt="bg"
            strength={300}
          >
            <div className={headerContainer}>
              {isMobileApp ? (
                <div className="mobile__container"> 
                <div className="mobile__content_wrapper">
                  <img 
                    className="mobile__template"
                    alt={data.datoCmsWork.title}
                    src={data.datoCmsWork.mobileTemplate.url}
                  />  
                  </div>
                  <h1 className={headerTitle}>
                  <a
                    href={data.datoCmsWork.urllink && data.datoCmsWork.urllink}>
                      {data.datoCmsWork.title}
                    </a>
                  </h1>
                  
                </div>
              ) : (
                <h1 className={headerTitle}>
                  <a
                    href={data.datoCmsWork.urllink && data.datoCmsWork.urllink}
                  >
                    {data.datoCmsWork.title}
                  </a>
                </h1>
              )}
            </div>
          </Parallax>

          <div className="sheet__inner__container">
            <div className="sheet__inner__wrapper">
              <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
              <div className="sheet__slider">
                <Slider infinite={true} slidesToShow={2} arrows>
                  {images.map((src, index) => (
                    <img
                      onClick={() => {
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                      alt={data.datoCmsWork.title}
                      key={src}
                      src={src}
                    />
                  ))}
                </Slider>
              </div>
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                  }
                />
              )}
              <div
                className="sheet__body"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsWork.descriptionNode.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      urllink
      shorthand
      background {
        url
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      mobileTemplate {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      mobileContent {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
