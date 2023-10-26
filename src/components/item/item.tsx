import { Component } from 'react';

type ItemState = {
 characterName: string,
 characterUrl: string,
}


export default class Item extends Component<Record<string,never>, ItemState> {

  constructor(props: Record<string,never>) {
    super(props);
    this.state = {
      characterName: props.characterName,
      characterUrl: props.characterUrl,
    };
  }
  
  componentDidMount() {

  }
  
  render() {
    return (
      <div className='results-item'>
        <div className='item-name'>Name: {this.state.characterName}</div>
        <div className='item-url'>URL: {this.state.characterUrl}</div>
      </div>
    );
  }
  

}
