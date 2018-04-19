import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      beers: []
    }
  }

  getBeers(){
    $.ajax({
      //url: 'http://jsonplaceholder.typicode.com/todos',
      url: '/beer.json',
      dataType: 'json',
      cache: false,
      success:function(data){
        this.setState({beers: data}, function(){
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err)
      }
    });
  }


  componentWillMount(){
    this.getBeers();
  }

  componentDidMount(){
    this.getBeers();
  }

  handleAddBeers(beer){
    //console.log(project);
    let beers = this.state.beers;
    beers.unshift(beer);
    this.setState({beers: beers});
  }

  handleDeleteBeers(id){
    console.log("handleDeleteBeers" + id)
    let beers= this.state.beers;
    let index = beers.findIndex(x => x.id === id);
    beers.splice(index, 1)
    this.setState(beers:beers)
  }



  render() {
    return (
      <div className="App">
       <AddProject addBeer={this.handleAddBeers.bind(this)}/>
       <Projects beers= {this.state.beers} onDelete={this.handleDeleteBeers.bind(this)}/>
      </div>
    );
  }
}

export default App;
