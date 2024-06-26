import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Image from "../../../components/lazyLoadImage/Image.jsx";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import "./style.scss";

const HeroBanner = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [query, setQuery] = useState("");

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroundImage(bg);
  }, [data]);

  function searchQueryHandler(event) {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  function searchQueryHandlerOnClick(event) {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className='heroBanner'>
      {!loading && (
        <div className='backdrop-img'>
          <Image src={backgroundImage} />
        </div>
      )}
      <div className='opacity-layer'></div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'>Welcome.</span>
          <span className='subTitle'>
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className='searchInput'>
            <input
              type='text'
              name='searchInput'
              placeholder='Search for a movie or tv show.....'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchQueryHandlerOnClick}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
