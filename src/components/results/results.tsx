import { Component, ReactNode } from 'react';
import Item from '@/components/item/item'
import { getAllCharacters } from '../../services/catalog-service';

type ResultsState = {
  loadedCharacters: Character[] | null,
  apiResponse: {results: Array<object>} | null
}

type Character = {
  name: string,
  url: string,
}


export default class Results extends Component<Record<string,never>, ResultsState> {
  state: ResultsState;
  constructor(props: Record<string,never>) {
    super(props);
    this.state = {
      loadedCharacters: null,
      apiResponse: null,
    };
  }


  componentDidMount() {
    getAllCharacters().then((results) => {this.setState( {apiResponse: results});
    this.setState({loadedCharacters: results.results})} );
    

  }

  render(): ReactNode {
    if(this.state.loadedCharacters){
      return (
        <div className="results-wrapper">
           {this.state.loadedCharacters.map((character) => {
            return <Item key={character.name} characterName={character.name} characterUrl={character.url} />;
          })}
        </div>
      );
    }
    return <></>
  }
}
