import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";

class Projects extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allDatoCmsWork(sort: { fields: [position], order: ASC }) {
              edges {
                node {
                  id
                  title
                  slug
                  excerpt
                  coverImage {
                    fluid(
                      maxWidth: 450
                      imgixParams: { fm: "jpg", auto: "compress" }
                    ) {
                      ...GatsbyDatoCmsSizes
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="projects_container">
              <div className="projects_wrapper">
                <div className="projects_title">
                  <h1> My projects</h1>
                </div>
                <Masonry className="showcase">
                  {data.allDatoCmsWork.edges.map(({ node: work }) => (
                    <div key={work.id} className="showcase__item">
                      <div className="card">
                        <Link
                          to={`/works/${work.slug}`}
                          className="card__image"
                        >
                          <Img fluid={work.coverImage.fluid} />
                        </Link>
                        <div className="card_description">
                          <div className="card_description_title">
                            <h2>{work.title}</h2>
                          </div>
                          <div className="card_description_content">
                            <h3>{work.excerpt}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default Projects;
