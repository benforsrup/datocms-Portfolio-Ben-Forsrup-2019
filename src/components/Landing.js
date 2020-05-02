import React, { useState, useEffect } from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useSpring, animated } from "react-spring";
import ThemeToggler from "gatsby-plugin-dark-mode/ThemeToggler";

const avatarStyle = {
  width: 150,
  // height: 150,
  borderRadius: 150,
  boxShadow: "0 4px 12px 0px black",
};

const items = [
  // "Hello there",
  "My name is",
  "Ben Forsrup",
  "and I like to build nice looking stuff",
];

const secondItems = ["Hello there"];

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30 - 230 }px, ${y / 30 - 40}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px, ${y / 20}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px,0)`;

const Landing = ({ socialProfiles }) => {
  const data = useStaticQuery(graphql`
    query landingQuery {
      landing: datoCmsHome {
        introText
        landingImage {
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  `);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 2, tension: 150, friction: 140 },
  }));

  return (
    <div className="fullpage">
      <div className="fullpage_content">
        <div className="fullpage_text">
          <div className="fullpage_avatar">
           
                <div
                  className="hero_name"
                 
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xy: calc(x, y) })
                  }
                >
                  <animated.div
                    className="layer1"
                    style={{ transform: props.xy.interpolate(trans1) }}/>
                   

                  <animated.div
                    className="layer2"
                    style={{ transform: props.xy.interpolate(trans2) }}
                  >
                    <h1>Ben Forsrup</h1>
                  </animated.div>
                  <animated.div
                    className="layer3"
                    style={{ transform: props.xy.interpolate(trans3) }}
                  >
                    <h1>Ben Forsrup</h1>
                  </animated.div>
                </div>
             
          </div>

          <div className="social_wrapper">
            <p className="intro_text">{data.landing.introText}</p>
            <p className="sidebar__social">
              {socialProfiles.edges.map(({ node: profile }) => (
                <a
                  key={profile.profileType}
                  href={profile.url}
                  target="blank"
                  className={`social social--${profile.profileType.toLowerCase()}`}
                >
                  {" "}
                </a>
              ))}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
