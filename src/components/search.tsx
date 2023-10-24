import { Component } from 'react';
import TestService from '@/services/test-service';

export default class Search extends Component {
  state = {
    name: 'X',
    age: 10,
  };
  handleInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="search-wrapper">
          {/* <input
            className="search-input"
            value={this.state.name}
            // onChange={this.handleInputChange}
          /> */}
          <button className="search-button">Search</button>
        </div>
        <div className="results-wrapper">
          <TestService />

          {/* <input value={this.state.name} /> */}
        </div>
      </>
    );
  }
}
