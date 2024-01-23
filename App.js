import React from "react";

// import useFetch from "./useFetch";
// import Counter from "./Counter";

// import { Component } from 'react';
// import { ReactDOM } from 'react';

// function App() {
//   return (
//     <h1>Welcome to ReactJs </h1>
//   );
// }

// export default App;

// class App extends Component{
//   //To show constent on the screnn.
//   render(){
//     return<h1>Hello Lakshdweep.</h1>
//   }
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello Man77.</h1>
//     </div>
//   )
// }

// function App() {
//   return <section>
//     <h1>Hello my name is Manish.</h1>
//     <p>This is some Content :)</p>
//     <p>Welcome to the react world💙</p>
//   </section>
// }

// function App() {
//   return (
//     <div>
//       <section>section tag</section>
//       <article>article tag.</article>
//       <h1 className="title">Title :</h1>
//       <label htmlfor="name">Name:</label>
//       <input type="text" id="name"></input>
//     </div>
//   );
// }

// function App(){
//   return <h1>Hello</h1>;
// }

// import Add from "./components/Add";

// function App(){
//   return<Add/>;
// }

// import Greetings from "./components/Greetings";
// import Add from "./components/Add";
// function App() {
//   return (
//     <>
//       <Add />
//       <Greetings />
//     </>
//   );
// }

// function App(){
//   const myName="Man cb";
//   const multiply=(a,b)=>a*b;
//   const specialClass ="simple-class";
//   return(
//   <>
//   <h1>{myName}</h1>
//   <p>2*2{2*2}</p>
//   <p>My friends List:{["Alex","john"]}</p>
//   <p>2*2={multiply(2,2)}</p>
//   <p className={specialClass}>This is a special class.</p>
//   </>
//   );
// };

// function App() {
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <>
//       {numbers.map((number) => (
//         <ul key = {Math.random()*10}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// function App() {
//   const userinfo = [
//     {
//       username: "Man",
//       email: "Man@gmail.com",
//       location: "paris",
//     },
//     {
//       username: "jack",
//       email: "jack@gmail.com",
//       location: "germany",
//     },
//     {
//       username: "rock",
//       email: "rock@gmail.com",
//       location: "colombo",
//     },
//   ];

//   return (
//     <div>
//       {userinfo.map(user=>(
//         <ul key={Math.random()*10}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// import User from "./components/user";

// function App() {
//   return (
//     <>
//       <User
//         img="https://rukminim2.flixcart.com/image/850/1000/l1whaq80/poster/y/c/0/small-poster-jai-shree-ram-wall-poster-300gsm-matt-13x19-inches-original-imagddyjbztgg8d7.jpeg?q=20&crop=false"
//         name="Hari Om"
//         age={18}
//         hobbies={["coding", "Reading", "mediatate"]}
//        >
//        <p>lorem dipsu m ipsum for dos fen fi sk skak skma hor lora</p>
//        <p>Hello childern from here.</p>

//        </User>
//     </>
//   );
// }

// const ValidPassword= () =><h1>Valid Password.</h1>;
// const invalidPassword= () =><h1>Invalid Password.</h1>;

// const Password = ({isValid}) =>{
//   if(isValid){
//     return<ValidPassword/>;
//   }
//     return <invalidPassword/>;
// };

// function App  ()  {
//   return (
//     <div>
//       <Password isValid={true}/>
//     </div>
//   );
// }

// const Cart = () => {
//   const items = ["wireless Earbuds", "Power Bank", "New ssd", "Hoodies"];

//   return (
//     <>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>You Have{items.length}Items in yours Cart.</h2>}
//       <ul>
//         <h4>👇Products</h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <Cart />
//     </>
//   );
// }

//ternary operator
// const ValidPassword= () =><h1>Valid Password.</h1>;
// const invalidPassword= () =><h1>Invalid Password.</h1>;

// const Password = ({isValid}) =>{
//   // if(isValid){
//   //   return<ValidPassword/>;
//   // }
//   //   return <invalidPassword/>;

// return isValid?<ValidPassword/>:<invalidPassword/>
// };

// function App  ()  {
//   return (
//     <div>
//       <Password isValid={true}/>
//     </div>
//   );
// }

// function App  () {

//   const s={
//     color:"white",
//     backgroundColor:"crimson",
//     padding:"10px",
//   };

//   return (
//     <div>
//       <h1 style={{color:s.color,backgroundColor:s.backgroundColor,padding:s.padding}}>Hello Iam React JS..</h1>
//     </div>
//   )
// }

//React Bootstrap.

// import Button from 'react-bootstrap/Button';

// function Buttons() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="success">Success</Button>
//       <Button variant="warning">Warning</Button>
//       <Button variant="danger">Danger</Button>
//       <Button variant="info">Info</Button>
//       <Button variant="light">Light</Button>
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavbarComponent() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;

// import'./style.css';

// function App ()  {
//   return (
//     <div>
//       <h1>Hello I'am React js THE best frontend Technology.</h1>
//       {/* <NavbarComponent/> */}
//     </div>
//   )
// }

//React Icons:

// import {BsFillCartCheckFill,BsGithub} from 'react-icons/bs'

// function App() {
//   return (
//     <div>
//       {/* <h1>Hello I'am React js THE best frontend Technology.</h1> */}
//       {/* <h1 className="text-orange-800">
//       Hello world! *//* </h1> */}
//       <BsFillCartCheckFill/>
//       <BsGithub/>

//     </div>
//   );
// }

//events

// const Button = () => {

//   const handleClick = (a,b) =>{
//     // console.log("clicked");
//     // alert("You clicked me..")
//     // console.log(a+b)
//     console.log(a+b);
//   }

//   return <button onClick={()=>handleClick(2,2)}>Click</button>;
// };

// function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

// const Copy = () => {

//   const copyHandler=()=>{
//     // alert("stop my work!!!")
//     console.log("stop stealing my content");
//   }

//   return (
//     <>
//       <p onCopy={copyHandler}>
//         jai hind vane mhatram bharat mata ki jay harrr jou hira mani jisks shba
//         hbf
//       </p>
//     </>
//   );
// };

// const Movie = () => {

//   const moveHandler=()=>{
//     // console.log("you hover me.")
//     alert("your hover me..")
//   }

//   return (
//     <div>
//       <p onMouseMove={moveHandler}> jai hind vane mhatram bharat mata ki jay harrr jou hira mani jisks shba</p>
//     </div>
//   )
// }

// function App(params) {
//   return (
//     <>
//       {/* <Copy /> */}
//       <Movie/>
//     </>
//   );
// }

//ReactJs states..

// import { useState } from "react";

// const Counter = () => {

//   const[count,setcount]=useState(0);

//   const increment=()=>{
//     setcount(count+1);
//   }
//   const decrement=()=>{
//     setcount(count-1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// };

// function App(params) {

//   return(
//     <>
//     <Counter/>
//     </>
//   );

// }

// import { useState } from "react";

// const Counter = () => {
//   const [username, setUsername] = useState("unknown");

//   const changeName = () => {

//     setUsername("Jay Shree Ram!");

//   };

//   return (
//     <>
//       <h1>{username}</h1>
//       <button onClick={changeName}>Change Name</button>
//     </>
//   );
// };

// function App(params) {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// import { useState } from "react";
// function App() {
//   const[friends,setFriends]=useState(["Arya","jay"]);

//   const addOne=()=>{
//     setFriends([...friends,"shree"])
//   };
//   const removeOne=()=>{
//      setFriends(friends.filter((f)=>f!=="jay"));
//   };
//   const updateone=()=>{
//      setFriends(friends.map(f=>f==="jay"?"Jayshree":f))
//   };

//   return(
//     <>

//     {friends.map((f)=>(
//     <li key={Math.random()}>{f}</li>
//     ))}

//     <button onClick={addOne}>Add one</button>
//     <button onClick={removeOne}>Remove one</button>
//     <button onClick={updateone}>Update one</button>

//     </>
//   )

// }

// import { useState } from "react";
// function App() {
//   const [movie, setmovie] = useState({
//     title: "RRR",
//     ratings: 8,
//   });

//   const handleClick=()=>{
//     const copyMovie={
//       ...movie,
//       ratings:4,
//     }

//     setmovie(copyMovie);
//     // setmovie({...movie,ratings:10}); Another way
//   }

//   return (
//     <>
//       <h1>{movie.title}</h1>
//       <p>Ratings:{movie.ratings}</p>
//       <button onClick={handleClick}>Change Rating</button>
//     </>
//   );
// }

// import { useState } from "react";

// function App() {
//   const [movies, setMovies] = useState([
//     { id: 1, title: "Batman", rating: 9 },
//     { id: 2, title: "Superman", rating: 8 },
//   ]);

//   const handleClick = () => {
//     setMovies(
//       movies.map((m) => (m.id === 1 ? { ...movies, title: "Iron Man" } : m))
//     );
//   };

//   return (
//     <div>
//       {movies.map((movie) => (
//         <li key={Math.random()}>{movie.title}</li>
//       ))}
//       <button onClick={handleClick}>Change Name</button>
//     </div>
//   );
// }

//Forms in React js:

// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");

//   const handleChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`you typed: ${username}`);
//     setUsername("");
//   };

//   return (
//     <>
//       <h1>Form Demo</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={handleChange}></input>
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

//useEffect

// import { useEffect, useState } from "react";

// function App() {
//   const [value, setValue] = useState(0);

//   //1.render for the (first time)
//   //2.anytime we do (side effect)
//   //3.Deependency lis

//   useEffect(() => {
//     console.log("Hello");
//     document.title = `increment($(value))`;
//   },[]);

//   return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>Click Me</button>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// // import { Value } from "sass";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       if (data && data.length) setData(data);
//     }
//     getData();
//   }, []);

//   return (
//     <>
//       <ul>
//         {data.map((item) => (
//           <li key={Math.random()}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

//Prop Drilling:

//1.import(createContext)
// import { createContext } from "react";

// import ComponentsC from "./ComponentsC";

// //2.creatig instance of (createContext)

// export const Data = createContext();
// export const Data1 = createContext();

// function App() {
//   const name = "Man WebDev";
//   const age = 21;
//   return (
//     //wrap our component into provider component
//     <>
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//         <ComponentsC/>
//         </Data1.Provider>
//       </Data.Provider>
//     </>
//   );
// }

//useReducer Hook:

// import { useReducer } from "react";

// //state:
// //dispatch:[value,setValue]

// //reducer:custom state Logic
// //intialState:{}

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "reset":
//       return {
//         ...state,
//         count: 0,
//       };
//     default:
//       return state;
//   }
// };

//useRef Hook in React JS:

// import { useRef } from "react";

// function App() {
//   const inputElement = useRef(null);

//   const focusinput = () => {
//     // console.log(inputElement);
//     inputElement.current.focus();
//     inputElement.current.value="Man C B"
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={() => focusinput()}>Focus & Write Man.</button>
//     </>
//   );
// }

//custom hooks:
// import { useState, useEffect } from "react";

// function App() {

//   const[data]=useFetch("https://jsonplaceholder.typicode.com/todos");

//   // const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/todos")
//   //     .then((r) => r.json())
//   //     .then((d) => setData(d));
//   // });

//   return <>
//   {data && data.map(item=>{
//     return <p key={item.id}>{item.title}</p>
//   })}
//   </>;
// }

// import Counter from "./Counter";

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// import Todo from "./Todo";

// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   );
// };

// import Main from "./Main";

// const App = () => {
//   return (
//     <div>
//       <Main/>
//     </div>
//   );
// };

// import Calculator  from "./Calculator";

// const App = () => {
//   return (
//     <div>
//       <Calculator/>
//     </div>
//   );
// };


import  ToggleButtonColor from './ToggleButtonColor';

const App = () => {
  return (
    <div>
      <ToggleButtonColor/>
    </div>
  );
};


export default App; //
