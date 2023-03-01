import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSearchSuggestions = async (searchValue) => {
    try {
      const response = await axios.get('http://127.0.0.1:4000/movie/');
      const suggestions = response.data.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
      ).slice(0, 3);
      setSuggestions(suggestions);
    } catch (error) {
      console.error(error);
    }
  };

  const renderSuggestion = (suggestion) => <div>{suggestion.title}</div>;

  const onSuggestionsFetch = ({ value }) => {
    fetchSearchSuggestions(value);
  };

  const onSuggestionsClear = () => {
    setSuggestions([]);
  };

  const handleSuggestionSelect = (event, { suggestion }) => {
    setValue(suggestion.title);
    navigate(`/watch/${suggestion._id}`, { state: suggestion });
    setValue('');
  };

  const inputProps = {
    placeholder: 'Search',
    value,
    onChange: (event, { newValue }) => setValue(newValue),
    required: true,
  };

  return (
    <nav className='header'>
      <h1 className='finallogo'>The-Stream</h1>
      <div className='line'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Movies'>Movies</Link>
          </li>
          <li>
            <Link to='/TvShows'>Tv Show</Link>
          </li>
          <li>
            <Link to='/Anime'>Anime</Link>
          </li>
          <li>
            <Link to='/watch_list'>Watch List</Link>
          </li>
        </ul>
        <div className='container'>
          <SearchBox
            suggestions={suggestions}
            onSuggestionsFetch={onSuggestionsFetch}
            onSuggestionsClear={onSuggestionsClear}
            onSuggestionSelect={handleSuggestionSelect}
            inputProps={inputProps}
            renderSuggestion={renderSuggestion}
          />
        </div>
      </div>
    </nav>
  );
};

const SearchBox = ({
  suggestions,
  onSuggestionsFetch,
  onSuggestionsClear,
  onSuggestionSelect,
  inputProps,
  renderSuggestion,
}) => {
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetch}
      onSuggestionsClearRequested={onSuggestionsClear}
      onSuggestionSelected={onSuggestionSelect}
      getSuggestionValue={suggestion => suggestion.title}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

// Add PropTypes check for suggestions
SearchBox.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSuggestionsFetch: PropTypes.func.isRequired,
  onSuggestionsClear: PropTypes.func.isRequired,
  onSuggestionSelect: PropTypes.func.isRequired,
  inputProps: PropTypes.object.isRequired,
  renderSuggestion: PropTypes.func.isRequired,
};

export default Navbar;
