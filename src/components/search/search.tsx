import { Component } from 'react';

type Props = {
  handler: (query: string) => void 
}
type SearchState = {
 name: string
}
export default class Search extends Component<Props, SearchState> {
  state: SearchState = {
    name: '',
  };

  inputChangeHandler(query: string) {
    this.props.handler( (query).trim())
  }
  
  render() {
    return (
      <>
        <div className="search-wrapper">
          <input
            className="search-input"
            value={this.state.name}
            onChange={() => {
             1
            }}// setState on submit, not on change
          />
          <button className="search-button" onClick={(e) => {
              this.inputChangeHandler(`foo`)}}>Search</button>
        </div>
      </>
    );
  }
}
