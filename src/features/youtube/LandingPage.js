import React, { useEffect } from 'react';
import './LandingPage.css';
import WebFont from 'webfontloader';

const LandingPage = ({ searchData }) => {

  //font chu
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Chilanka']
      }
    })
  }, [])

  return (
    <div className='landing-page-container grid-container'>
      {searchData.map((item, index) => (
        <div className='lan-item grid-item' key={index}>
          <div className='land-item'>
            <iframe
              className='video'
              width="560" height="315"
              src={`https://www.youtube.com/embed/${item.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              showinfo='0'
            >
            </iframe>
            <div className='land-content-box'>
              <div className="cursor video-item-title">
                {item.snippet.title}
              </div>
              <div className="cursor video-item-publishTime">
                {item.snippet.publishTime}
              </div>
              <div className="cursor video-item-channel">
                {item.snippet.channelTitle}
              </div>
              <div className="cursor video-item-desciption">
                {item.snippet.description}
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
export default LandingPage
