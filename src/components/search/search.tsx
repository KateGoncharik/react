import { Component } from 'react';
import SearchInput from '../search-input/search-input';
import SearchButton from '../search-button/search-button';

type Props = {
  inputChangeHandler: (query: string) => void;
  buttonClickHandler: () => void;
};

type SearchState = {
  hasError: boolean;
};

export default class Search extends Component<Props, SearchState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  render() {
    if (this.state.hasError === true) {
      throw new Error('Some problem occured!');
    }
    return (
      <div className="search-wrapper">
        <SearchInput inputChangeHandler={this.props.inputChangeHandler} />
        <SearchButton buttonClickHandler={this.props.buttonClickHandler} />
        <button
          onClick={() => {
            this.setState({ hasError: true });
          }}
        >
          throw Error
        </button>
      </div>
    );
  }
}
