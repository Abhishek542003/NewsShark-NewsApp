import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl,newsUrl,author,date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://feeds.abplive.com/onecms/images/uploaded-images/2023/06/13/208b2fcddb3e6156d24db2750eaeb4701686673508726324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628"
                : imageUrl
            }
            alt="feed"
            onError={(e) => {
              e.target.src =
                "https://th.bing.com/th/id/R.9d7b29446a6adc7316a4b775dd8754ec?rik=JlaOShB8Otei%2bA&riu=http%3a%2f%2fwww.lowerycommunications.com%2fwp%2fwp-content%2fuploads%2f2013%2f12%2fslider-for-news-m.jpg&ehk=pBuBXaobIcXuoEzAUW8R4653wTMiXjzA58x80zL0UFM%3d&risl=&pid=ImgRaw&r=0";
            }}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
