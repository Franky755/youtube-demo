import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import './App.css';
import LandingPage from './features/youtube/LandingPage';
import Navigation from './features/youtube/Navigation';
import SearchForm from './features/youtube/SearchForm';
import SearchResult from './features/youtube/SearchResult';

function App() {
  const [searchText, setSearchText] = useState();
  const [inputSearchText, setInputSearchText] = useState();
  const [searchData, setSearchData] = useState([]);


  //call youtube Api
  useEffect(() => {
    const youtubeApi = async () => {
      const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuoMHRgZi9eLAhL8grL15zoxMGzElM3wA&q=${searchText}&part=snippet&maxResults=25`)
        .then((res) => res.json());
      setSearchData(res.items);
    }
    youtubeApi();
  }, [searchText]);


  const handleSearching = (e) => {
    setSearchText(inputSearchText)
    e.preventDefault()
  }

  //font chu
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Chilanka']
      }
    })
  }, [])

  return (
    <div className="App">
      <SearchForm
        handleSearching={handleSearching}
        inputSearchText={inputSearchText}
        setInputSearchText={setInputSearchText}
      />

      {!searchText &&
        <Navigation />
      }
      {!searchText &&
        <LandingPage
          searchData={searchData}
        />
      }
      {searchText &&
        <SearchResult
          searchText={searchText}
          setSearchText={setSearchText}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      }
    </div>
  );
}

export default App;
