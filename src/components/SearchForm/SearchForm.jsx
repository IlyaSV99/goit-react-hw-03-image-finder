import { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/SearchForm/SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });

    this.resetForm();
  };

  resetForm() {
    this.setState({
      query: '',
    });
  }

  render() {
    const { query } = this.state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css[`SearchForm-button`]}>
            <span className={css[`SearchForm-button-label`]}>Search</span>
          </button>
          <input
            className={css[`SearchForm-input`]}
            type="text"
            name="query"
            value={query}
            onChange={this.onChange}
            autoComplete="off"
            autoFocus
            placeholder="Enter here to search images"
          />
        </form>
      </header>
    );
  }
}


SearchForm.defaultProps = {
  onSubmit: () => {},
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
