import { Component, ReactNode } from 'react';

export default class TestService extends Component {
  constructor(props: object) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((data) => {
        const value = JSON.parse(JSON.stringify(data.results));
        this.setState({ data: value });
      });
  }

  render(): ReactNode {
    return (
      <div className="results">
        <input className="results-input" value={this.state.data} />
      </div>
    );
  }
}
