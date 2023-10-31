import { Component } from 'react';
import SearchInput from '../search-input/search-input';
import SearchButton from '../search-button/search-button';

type Props = {
  inputChangeHandler: (query: string) => void;
  buttonClickHandler: () => void;
};

export default class Search extends Component<Props, never> {
  render() {
    return (
      <div className="search-wrapper">
        <SearchInput inputChangeHandler={this.props.inputChangeHandler} />
        <SearchButton buttonClickHandler={this.props.buttonClickHandler} />
      </div>
    );
  }
}
