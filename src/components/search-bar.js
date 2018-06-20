import React, { Component } from 'react'

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: "", placeHolder: "Entrez votre recherche" };
  }

  render() {
    return (
      <div>
        <input onChange={this.inputChange.bind(this)} placeholder={this.state.placeHolder} />
      </div>
    )
  }

  inputChange(e) {
    this.setState({ searchText: e.target.value});
  }
}

export default SearchBar
