import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks=['Imran', 'Jafor','Sallu', 'Joshim']
  const products=[
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>MD Nazim Uddin</h2>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok} </li> )
          }
          {
            products.map(Nam => <li>{Nam.name}</li>)
          }
          {
            products.map(you =><Product product={you}></Product>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name='Rakib' job='guraguri'></Person>
        <Person name='Rakhi' job='study'></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(userU => <li>{userU.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin: '4px'
  }
  return(
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', margin:'5px',  width:'400px'}}>
      <h3>My Name: {props.name} </h3> 
      <h4>My Profession: {props.job} </h4>     
    </div>
  )
}

export default App;






















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
