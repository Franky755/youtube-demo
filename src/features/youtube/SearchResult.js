import './SearchResult.css';

const SearchResult = ({ searchText, setSearchText, searchData, setSearchData }) => {

  return (
    <>
      {/* Search-result-text */}
      <div className='search-result'>
        {(searchText && searchText.length > 0) && (searchData.length > 0 ? `Searching result of "${searchText}"` : 'Not found')}
      </div>

      {/* search result */}
      <div className='search-result-container'>
        {searchData && searchData.map((searchData, index) => (
          <div className='result-box' key={index}>
            {/* video-contents */}
            <div className='search-video-box'>
            <iframe
              className='searched-video'
              width="560" height="315"
              src={`https://www.youtube.com/embed/${searchData.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
            <div className='searched-content-box'>
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
