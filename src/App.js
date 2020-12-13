import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [{
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '장준표',
  'birthday' : '961521',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/2',
  'name' : '박민수',
  'birthday' : '961614',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/3',
  'name' : '홍종희',
  'birthday' : '961892',
  'gender' : '여자',
  'job' : '주부'
}]
class App extends Component{
  render(){
    return (
      <div>
        {
          customer.map(c =>{
            return(
              <Customer
              key={c.id} 
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
