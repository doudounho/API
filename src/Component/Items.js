import React,  {Component } from 'react'

class  Items extends Component {
    render(){
       

       const {id , name, age ,adresse} = this.props;

        return (
            <div>
                <p>{id} </p>
                <p>{name} </p>
                <p>{age} </p>
                <p>{adresse} </p>
            </div>
          )
    }
 
}

export default Items;