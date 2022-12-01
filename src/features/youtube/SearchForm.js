import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import './SearchForm.css';

const SearchForm = () => {

  const [searchText, setSearchText] = useState('wc 2022')
  const [searchData, setSearchData] = useState([])

  //call youtube Api
  useEffect(() => {
    const youtubeApi = async () => {
      const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD2yhQNpvPGetLHpdMDUJsFHtS78-aqXVc&q=${searchText}&part=snippet&maxResults=25`)
        .then((res) => res.json());
      setSearchData(res.items);
    }
    youtubeApi();
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Chilanka']
      }
    })
  }, [])

  const handleSearching = (e) => {
    e.preventDefault()
    setSearchData(searchData.filter(x => x.title?.includes(searchText)))
  }

  console.log('api', searchData)

  return (
    <>
      <form onSubmit={handleSearching} className='form-search'>
        <label className='label-search' >Search</label>
        <input
          type='text'
          className='search-input'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          title='Whats a interesting things...'
          placeholder='Search...'
        ></input>
        <button
          type='submit'
          title='Search it'
          className='btn btn-search'
        >
          Search
        </button>
      </form>
      <div className='search-result'>
        {(searchText && searchText.length > 0) && (searchData.length > 0 ? `There are: ${searchData.length} results in the List!` : 'Not found')}
      </div>
      <div className='search-result-container'>
        {searchData && searchData.map((searchData, index) => (
          <div className='result-box' key={index}>
            {/* video-thumbnails */}
            <img src={searchData.snippet.thumbnails.high.url} className="item-thumb" key={index}>
            </img>

            {/* video-contents */}
            <div className='content-box'>
              <div className="item-title">
                {searchData.snippet.title}
              </div>
              <div className="item-publishTime">
                {searchData.snippet.publishTime}
              </div>
              <div className="item-channel">
                {searchData.snippet.channelTitle}
              </div>
              <div className="item-desciption">
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

export default SearchForm
