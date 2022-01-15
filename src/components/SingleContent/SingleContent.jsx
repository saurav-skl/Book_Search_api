// import { img_300, unavailable } from "../../config/config";
import unavailable_img from "../../img/unavailable_img.png";
import React from "react";
import ContentModal from "../Modal/ContentModal";
import "./SingleContent.css";

const SingleContent = ({ detail }) => {
  const image =
    detail.volumeInfo.imageLinks !== undefined
      ? detail.volumeInfo.imageLinks.thumbnail
      : unavailable_img;

  const author =
    detail.volumeInfo.authors !== undefined
      ? detail.volumeInfo.authors
      : "unknown";
  const pdate =
    detail.volumeInfo.publishedDate !== undefined
      ? detail.volumeInfo.publishedDate
      : "unknown";

  const avgrating =
    detail.volumeInfo.averageRating !== undefined
      ? detail.volumeInfo.averageRating
      : "*";

  const publisher =
    detail.volumeInfo.publisher !== undefined
      ? detail.volumeInfo.publisher
      : "unknown";

  return (
    <>
      {console.log(detail.id)}
      <div className="card">
        <div className="img">
          <img src={image} alt={detail.id} title={detail.id} />
        </div>
        <div className="card-text">
          <h2>Title: {detail.volumeInfo.title}</h2>
          <div className="price">Publisher: {publisher}</div>
          <div className="tag">{author}</div>
          <div className="rate">
            {avgrating}
          </div>

          <div className="desc">publishedDate: {pdate}</div>
          <a href="#" className="btn">
            Checkout
          </a>
        </div>
      </div>
      <ContentModal />
    </>
  );
};

export default SingleContent;

/*
id, poster, title, date, media_type

 <img
          className="poster singleContent__img"
          // src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        /> 
  <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span> 

*/
