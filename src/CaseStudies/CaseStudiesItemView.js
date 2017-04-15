import React from 'react';
import ReactMarkdown from 'react-markdown';

const CaseStudiesItemView = props => {
  const {
    title,
    url,
    description,
    team,
    skill,
    agency,
    client,
    backgroundColour,
    textColour,
    date,
    images,
  } = props;

  const style = {
    backgroundColor: backgroundColour,
    color: textColour,
  };

  const year = new Date(date).getFullYear();

  return (
    <article className="caseStudy" style={style}>
      <h2 className="h4 caseStudy-title">{title}</h2>
      <div>{year}</div>
      <a className="caseStudy-link" href="{url}">{url}</a>
      <div className="caseStudy-info">
        <div className="caseStudy-description">
          <ReactMarkdown source={description} />
        </div>
        <div className="caseStudy-image">
          {images ? <img src={images[0].fields.file.url} alt={title} /> : null}
        </div>

        <div className="caseStudy-meta">
          {team}
          {skill}
          {client}
          {agency}
        </div>
      </div>
    </article>
  );
};

export default CaseStudiesItemView;
