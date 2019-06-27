import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Card = ({
  title,
  subtitle,
  link,
  tags,
  image,
}) => {
  if (link && link.includes('http')) {
    return (
      <a href={link}>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                {image}
              </div>
              <div className="media-content">
                <h4 className="title is-size-5-desktop is-size-6-touch has-text-light">
                  {title}
                </h4>
                <p className="subtitle is-size-5-desktop is-size-6-touch has-text-light">
                  {subtitle}
                </p>
                <div className="tags">
                  {tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <Link to={link}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              {image}
            </div>
            <div className="media-content">
              <h4 className="title is-size-5-desktop is-size-6-touch has-text-light">
                {title}
              </h4>
              <p className="subtitle is-size-5-desktop is-size-6-touch has-text-light">
                {subtitle}
              </p>
              <div className="tags">
                {tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.node,
};

Card.defaultProps = {
  link: null,
  tags: [],
  image: null,
};

export default Card;
