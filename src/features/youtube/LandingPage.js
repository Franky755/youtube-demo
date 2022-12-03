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
    <div className='landing-page-container'>
      {searchData.map(item => (
        <div className='video-list grid-item'>
          <div className='video-box '>
            <iframe
              className='video'
              width="560" height="315"
              src={`https://www.youtube.com/embed/${item.id.videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <div className='content-box'>
              <div className="cursor item-title">
                {item.snippet.title}
              </div>
              <div className="cursor item-publishTime">
                {item.snippet.publishTime}
              </div>
              <div className="cursor item-channel">
                {item.snippet.channelTitle}
              </div>
              <div className="cursor item-desciption">
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
