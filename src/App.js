//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import UserList from './UserList';
import Items from './Component/Items';





class App extends Component {
  state = {
    post : []
  }
     componentDidMount(){
       
         fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then((response)=>{
          return response.json()
         })
          .then((result)=>{
            setTimeout(() =>{
                this.setState({post: result})
            },1500);
           
           
           })
           }


  render(){
    return (
      <div className="App">
        <h1>Mes donnees</h1>
        { (this.state.post.title) ? this.state.post.title : <p>Chargement...</p> }
        List Items
        <Items id="1" name="Dudu" age= "20" adresse="sacre-coeur" />
        <Items id="2" name="Mussa" age= "16" adresse="yarakh" />
        <Items id="3" name="Pape" age= "19" adresse="PA" />
        <Items id="4" name="Ibou" age= "22" adresse="Pikine"/>
        <UserList/>
      </div>
    );

  }
 
}

export default App;
