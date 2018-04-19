import React, { Component } from 'react';
import BeerItem from './ProjectItem';

class Beers extends Component {

  deleteBeer(id){
    this.props.onDelete(id);
  }

  render() {
    let beerItems;
    if(this.props.beers){
      beerItems = this.props.beers.map(beer=>{
      //  console.log(project)
      return (
        <BeerItem onDelete={this.deleteBeer.bind(this)} key= {beer.id} beer ={beer}/>
      )
    });
    }
    return (
      <div className="Projects">
      <h3>Recent Beers</h3>

       {beerItems}

      </div>
    );
  }
}



export default Beers;
