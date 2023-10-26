import { Component } from 'react';
import Search from '@/components/search/search';
import Results from '@/components/results/results';

type MainPageState = {
  searchQuery: string,
}

export default class MainPage extends Component<Record<string,never>, MainPageState> {
  constructor(props: Record<string,never>) {// remove?
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.handler = this.handler.bind(this);
  }

  handler(query: string) {
    this.setState({
      searchQuery: query
    });
  }

  render() {
    return (
      <>
      <Search handler = {this.handler} />
      <Results searchQuery = {this.state.searchQuery} />
      </>
    );
  }
}
