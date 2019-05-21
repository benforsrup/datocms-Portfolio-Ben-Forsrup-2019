import React from "react";
import Slider from "react-slick";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import classNames from "classnames";
import * as _ from "lodash";
import { Parallax, Background } from "react-parallax";

export default ({ data }) => {
  console.log(data);
  let headerContainer = classNames({
    sheet__headerContainer: true,
    [data.datoCmsWork.shorthand]: true,
    background: !_.isEmpty(data.datoCmsWork.background)
  });

  let imageStyle = {
    backgroundImage:
      data.datoCmsWork.background &&
      "url(" + data.datoCmsWork.background.url + ")"
  };
  return (
    <Layout>
      <article className="sheet">
        <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
        <div className="sheet__inner">
          <Parallax
            blur={15}
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
              <h1 className="sheet__title">
                <a href={data.datoCmsWork.urllink && data.datoCmsWork.urllink}>
                  {data.datoCmsWork.title}
                </a>
              </h1>
            </div>
          </Parallax>

          <div className="sheet__inner__container">
            <div className="sheet__inner__wrapper">
              <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
              <div className="sheet__slider">
                <Slider infinite={true} slidesToShow={2} arrows>
                  {data.datoCmsWork.gallery.map(({ fluid }) => (
                    <img
                      alt={data.datoCmsWork.title}
                      key={fluid.src}
                      src={fluid.src}
                    />
                  ))}
                </Slider>
              </div>
              <div
                className="sheet__body"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsWork.descriptionNode.childMarkdownRemark.html
                }}
              />
              <div className="sheet__gallery">
                <Img fluid={data.datoCmsWork.coverImage.fluid} />
              </div>
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
    }
  }
`;
