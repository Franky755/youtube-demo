import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import './SearchForm.css';

const SearchResult = () => {

  const [searchText, setSearchText] = useState('china covid');
  const [inputSearchText, setInputSearchText] = useState();
  const [searchData, setSearchData] = useState([]);

  //call youtube Api
  useEffect(() => {
    const youtubeApi = async () => {
      const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDE5kDyxhC_CMt2Ww0rWlMC3Fe3yocCv9g&q=${searchText}&part=snippet&maxResults=25`)
        .then((res) => res.json());
      setSearchData(res.items);
    }
    youtubeApi();
  }, [searchText]);

  //font chu
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Chilanka']
      }
    })
  }, [])

  const handleSearching = (e) => {
    setSearchText(inputSearchText)
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSearching} className='form-search'>
        <label className='label-search'></label>
        <input
          type='text'
          className='search-input'
          value={inputSearchText}
          onChange={e => setInputSearchText(e.target.value)}
          title='Whats a interesting things...'
          placeholder='Search...'
        ></input>
        <button
          type='submit'
          title='Search it'
          className='btn btn-search'
        >Search
        </button>
      </form>

      {/* Search-result-text */}
      <div className='search-result'>
        {(searchText && searchText.length > 0) && (searchData.length > 0 ? `Searching result of "${searchText}"` : 'Not found')}
      </div>

      {/* search result */}
      <div className='search-result-container'>
        {searchData && searchData.map((searchData, index) => (
          <div className='result-box' key={index}>

            {/* video-thumbnails */}
            <img
              src={searchData.snippet.thumbnails.high.url} className="item-thumb" key={index}>
            </img>

            {/* video-contents */}
            <div className='content-box'>
              <div className="cursor item-title">
                {searchData.snippet.title}
              </div>
              <div className="cursor item-publishTime">
                {searchData.snippet.publishTime}
              </div>
              <div className="cursor item-channel">
                {searchData.snippet.channelTitle}
              </div>
              <div className="cursor item-desciption">
                {searchData.snippet.description}
              </div>
            </div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchResult
