import React from "react";
import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Tv Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="daram">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://ntvb.tmsimg.com/assets/p9155926_b_h8_as.jpg?w=1280&h=720"
        alt="viking bjorn"
      />
      <div className="info">
        <img
          src="https://see.news/wp-content/uploads/2021/12/JOHN-WICK-POSTERPSD.png"
          alt="john wick"
        />
        <span className="desc">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
          assumenda labore sequi, delectus obcaecati fugiat culpa quam vitae
          unde illo voluptatem magnam eligendi quia autem?
          lorem500
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default featured;
