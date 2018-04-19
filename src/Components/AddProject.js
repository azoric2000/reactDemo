import React, { Component } from 'react';
import uuid from 'uuid';
class AddBeer extends Component {

  constructor(){
    super();
    this.state = {
      newBeer:{}
    }
  }

  static defaultProps = {
    categories: ["Brown Ale", "IPA", "Imperial Stout", "Fruit Beer", "Belgian Tripel ", "Saison"]
  }

  handleSubmit(e){

    if(this.refs.title.value === ''){
      alert('Your beer needs a name');
    }
    else{
      this.setState({newBeer: {

        id:uuid.v4(),
        title: this.refs.title.value,
        Brewery: this.refs.Brewery.value,
        style: this.refs.style.value,
        rating: this.refs.rating.value
      }}, function(){ 
        this.props.addBeer(this.state.newBeer);
      });
    }
    e.preventDefault();
  }

  changer(){
	  let x = document.getElementById('rater').value
    let stars = ""
    for(var i=0; i <= x-1; i++){
        stars += "*"
      }

    document.getElementById('rating').value=stars;
	}

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key = {category} value ={category}> {category}</option>
    })
    return (
      <div>
        <h3>Add Beer </h3>
        <form onSubmit = {this.handleSubmit.bind(this)}>
         <div>
          <label>Beer Name</label>
          <input type = "text" ref="title"/>
         </div>
         <div>
          <label>Brewery</label>
          <input type = "text" ref="Brewery"/>
         </div>
         <div>
          <label>Style</label>
          <select ref="style">
            {categoryOptions}
          </select>
         </div>
         <div>
          <label>Rating</label>
           <input type="range" min="0" max="5" defaultValue="0" onChange={this.changer.bind(this)} id="rater"/>
           <input type='text' defaultValue='' id="rating" ref="rating"  className="special" size = "1" readOnly/>
         </div>
         <input className="button" type = "submit" value= "Add Beer"/>
        </form>

      </div>
    );
  }
}

export default AddBeer;
