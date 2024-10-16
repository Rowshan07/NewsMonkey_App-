import React from 'react';

class NewsItem extends React.Component {
constructor(props) {
    super(props);

    // this.props = {String :"title", description};
}

    render() {
        let {title, description, imageUrl, url, date} = this.props;
        return <div>
            <div className="card">
  <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/303e/live/afbf0040-798b-11ef-b02d-c5f3b724a1ea.jpg"} className="card-img-top position-relative" height={160} width={286} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">{date}</small></p>
    <a href={url} target='blank' className="btn btn-dark btn-sm">Learn More</a>
  </div>
</div>
        </div>;
    }
}

export default NewsItem;