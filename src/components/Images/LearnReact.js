import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const LearnReact = () => (
  <figure className="image is-96x96">
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "learn-react.jpg" }) {
            childImageSharp {
              fixed(width: 96, height: 96) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      )}
    />
  </figure>
);

export default LearnReact;
