import React from 'react';
import ArticlesItemView from './ArticlesItemView';

const Year = props => {
  const { articles } = props;

  return (
    <div className="contentList-group">
      <aside className="contentList-group-year" role="complementary">
        {props.year}
      </aside>
      <ul className="contentList-group-items">
        {articles
          .filter(item => {
            return item.year === props.year;
          })
          .map(item => {
            const { title, subtitle, date } = item.fields;
            const id = item.sys.id;

            return (
              <ArticlesItemView
                title={title}
                subtitle={subtitle}
                date={date}
                id={id}
                key={id}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Year;
