import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  title,
  subtitle,
  link,
  image,
  tags,
}) => (
  <a href={link}>
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            {image()}
          </div>
          <div className="media-content">
            <h4 className="title has-text-light is-size-5-desktop is-size-6-touch">
              {title}
            </h4>
            <p className="subtitle has-text-light is-size-5-desktop is-size-6-touch">
              {subtitle}
            </p>
            <div className="tags">
              {tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
);

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  title: '',
  subtitle: '',
  link: null,
  tags: [],
};

export default Card;
