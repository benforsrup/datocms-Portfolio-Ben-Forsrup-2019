import React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      footer: datoCmsHome {
        copyright
      }
    }
  `);
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_intent">
          <p>{data.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
