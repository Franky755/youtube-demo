
import './SearchForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'




const SearchForm = ({ handleSearching, inputSearchText, setInputSearchText }) => {

  return (
    <>
      <form onSubmit={handleSearching} className='form-search'>
        <label className='label-search'> <FontAwesomeIcon className='youtube' icon={faYoutube}/></label>
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
    </>
  )
}

export default SearchForm
