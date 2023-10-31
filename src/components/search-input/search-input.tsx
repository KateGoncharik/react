import { Component } from 'react';

type Props = {
  inputChangeHandler: (query: string) => void;
};

export default class SearchInput extends Component<Props, never> {
  inputChangeHandler(query: string) {
    this.props.inputChangeHandler(query.trim());
  }

  render() {
    return (
      <input
        className="search-input"
        defaultValue={''}
        onChange={(e) => {
          this.props.inputChangeHandler(e.target.value);
        }} // TODO setState on submit, not on change
      />
    );
  }
}
