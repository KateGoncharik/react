import { Component } from 'react';

type Props = {
  buttonClickHandler: () => void;
};

export default class SearchInput extends Component<Props, never> {
  render() {
    return (
      <button className="search-button" onClick={this.props.buttonClickHandler}>
        Search
      </button>
    );
  }
}
