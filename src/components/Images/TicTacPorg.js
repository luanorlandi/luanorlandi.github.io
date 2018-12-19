import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const TicTacPorg = () => (
  <figure className="image is-96x96">
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "tic-tac-porg.jpg" }) {
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

export default TicTacPorg;
