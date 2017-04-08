import React from 'react';
// import dashify from 'dashify'
import { Link } from 'react-router-dom';
import months from '../utils/months';

const ArticlesItemView = props => {
  const { title, subtitle, date, id } = props;
  const formattedDate = new Date(date);
  // const url = `/articles/${dashify(title)}`
  const url = `/articles/${id}`;
  return (
    <li className="contentList-group-items-item">
      <Link className="infoLink" to={url} title={'Read ' + title}>
        <div className="infoLink-content">
          <div className="infoLink-content-title">{title}</div>
          {subtitle
            ? <div className="infoLink-content-excerpt">{subtitle}</div>
            : null}
        </div>
        <time className="infoLink-date">
          {formattedDate.getDay()}
          {' '}
          {months[formattedDate.getMonth()]}
          {' '}
          {formattedDate.getUTCFullYear()}
        </time>
      </Link>
    </li>
  );
};

export default ArticlesItemView;
