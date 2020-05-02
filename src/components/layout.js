import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import "../styles/index.sass";
import Footer from "./Footer";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const TemplateWrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHome.seoMetaTags}
      />
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            className="themeToggler_wrapper"
            onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
          >
            <div className="themeToggler" />
          </div>
        )}
      </ThemeToggler>

      {children}
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
