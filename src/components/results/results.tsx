import { Component, ReactNode } from 'react';
import Item from '@/components/item/item'
import { getAllCharacters, getSpecifiedCharacters } from '../../services/catalog-service';

type ResultsState = {
  loadedCharacters: Character[] | null,
  apiResponse: {results: Array<object>} | null
  filteredResult: Character[] | null
}

type Props = {
  searchQuery: string
}

type Character = {
  name: string,
  url: string,
}


export default class Results extends Component<Props, ResultsState> {
  state: ResultsState = {
    loadedCharacters: null,
      apiResponse: null,
      filteredResult: null,
  };

  componentDidMount() {
    getAllCharacters().then((results) => {this.setState( {apiResponse: results});
    this.setState({loadedCharacters: results.results})});
    getSpecifiedCharacters(this.props.searchQuery).then((character) => this.setState({filteredResult: character.results}));
    

  }

  render(): ReactNode {
    if(this.state.filteredResult){
      return (
        <div className="results-wrapper">
         
          {this.state.filteredResult.map((character) => {
            return <Item key={character.name} characterName={character.name} characterUrl={character.url} />;
          })}
        </div>
      );
    }
    if(this.state.loadedCharacters){
      return <>
        {this.state.loadedCharacters.map((character) => {
          return <Item key={character.name} characterName={character.name} characterUrl={character.url} />;
        })}
      </>
    }
    
  }
}
