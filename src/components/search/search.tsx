import { Component } from 'react';

export default class Search extends Component {
  state = {
    searchQuery: 'X',
  };
  handleInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="search-wrapper">
          <input
            className="search-input"
            defaultValue={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
          <button className="search-button">Search</button>
        </div>
      </>
    );
  }
}
