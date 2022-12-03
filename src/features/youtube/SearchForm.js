
import './SearchForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'




const SearchForm = ({ handleSearching, inputSearchText, setInputSearchText }) => {

  return (
    <div className='header-container'>
      <form onSubmit={handleSearching} className='form-search'>
        <label className='label-search'> <FontAwesomeIcon className='youtube-icon' icon={faYoutube} /></label>
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
      <div className='user-info'>
        <img
          className='user-ava'
          src="https://hieuungchu.com/wp-content/uploads/2020/06/Yoona.jpg"
          title='Yoona'
        >
        </img>
        <div className='user-name'>Hi, <a href=''>Yoona</a></div>
      </div>
    </div>
  )
}

export default SearchForm
