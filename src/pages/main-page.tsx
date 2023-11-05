import { Component } from 'react';

import Search from '@/components/search/search';
import Results from '@/components/results/results';
import { LocalStorage } from '@/lib/local-storage';
import { getSpecifiedCharacters } from '@/services/catalog-service';

type MainPageState = {
  inputValue: string;
  characters: Character[] | null;
};

type Character = {
  name: string;
  url: string;
};
export default class MainPage extends Component<Record<string, never>, MainPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      inputValue: LocalStorage.getItem('lastSearchQuery') ?? '',
      characters: null,
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  inputChangeHandler(value: string) {
    this.setState({
      inputValue: value,
    });
  }

  componentDidMount() {
    const lastSearchQuery = LocalStorage.getItem('searchQuery');
    this.getCharacters(lastSearchQuery);
  }

  getCharacters(searchQuery?: string) {
    getSpecifiedCharacters(searchQuery ?? this.state.inputValue).then(
      (character: { results: Character[] }) => {
        this.setState({ characters: character.results });
      }
    );
  }

  buttonClickHandler() {
    LocalStorage.setItem('lastSearchQuery', this.state.inputValue);
    this.getCharacters();
  }

  render() {
    return (
      <>
        <Search
          inputChangeHandler={this.inputChangeHandler}
          buttonClickHandler={this.buttonClickHandler}
        />
        <Results characters={this.state.characters} />
      </>
    );
  }
}
