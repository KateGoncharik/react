import { Component } from 'react';
import { LocalStorage } from '@/lib/local-storage';

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
        defaultValue={LocalStorage.getItem('lastSearchQuery') ||''}
        onChange={(e) => {
          this.props.inputChangeHandler(e.target.value);
        }}
      />
    );
  }
}
