import React, { Component } from 'react';

class BeerItem extends Component {

  deleteBeer(id){
    console.log('test')
    this.props.onDelete(id)
  }
  render() {

    return (
      <li className="Beers">
        <strong>{this.props.beer.title}</strong> {this.props.beer.rating} < a href="#x" onClick={this.deleteBeer.bind(this, this.props.beer.id)}>X</a>
        <div className="info"> {this.props.beer.Brewery}</div>
        <div className="info"> {this.props.beer.style}</div>
      </li>
    );
  }
}

export default BeerItem;
