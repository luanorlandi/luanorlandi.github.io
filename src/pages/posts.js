import React from 'react';
import { FormattedMessage } from 'react-intl';

import Card from 'components/Card';
import postImage from 'assets/learn-react.jpg';

const projectCards = [
  {
    title: 'posts.learnReact.title',
    subtitle: 'posts.learnReact.subtitle',
    link: 'https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358',
    imageLink: postImage,
    tags: ['React'],
  },
];

const Posts = () => (
  <section className="section is-size-4-desktop is-size-5-touch">
    <h1 className="title has-text-centered has-text-light">
      <FormattedMessage id="posts.title" />
    </h1>
    <div className="container">
      <hr />
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          {projectCards.map(projectCard => (
            <Card key={projectCard.title} {...projectCard} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Posts;
