import { Component } from 'react';
import Search from '@/components/search/search';
import Results from '@/components/results/results';


export default class MainPage extends Component {
  render() {
    return (
      <>
      <Search />
      
        <Results />
   
      </>
        
    );
  }
}
