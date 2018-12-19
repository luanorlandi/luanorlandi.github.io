import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const GatsbyCourse = () => (
  <figure className="image is-96x96">
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "gatsby-course.jpg" }) {
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

export default GatsbyCourse;
