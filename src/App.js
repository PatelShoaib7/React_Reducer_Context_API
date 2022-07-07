import logo from './logo.svg';
import './App.css';
import {  useContext, useReducer } from 'react';
import { reducer } from './Reducer/reducer';

function App() {
  const [state , dispatch] = useReducer(reducer,0)
  

  return (
    <div className="App">
        <h1>Reducer with differnt file creation</h1>
           <h1>Counter {state}</h1>
         <button onClick={()=> dispatch({type:'INCREMENT' , playLoad:1})}>Add</button>
         <button onClick={()=> dispatch({type:"DECREMENT" , playLoad:100})}>ADD 100</button>
       
       
         <button onClick={()=> dispatch({type:'INCREMENTBY500' , playLoad:500})}>Add 500</button>
         <button onClick={()=> dispatch({type:'DECREMENTBY500' , playLoad:500})}>Reduce 500</button>
       
       
         <button onClick={()=> dispatch({type:'INCREMENTBY1000' , playLoad:1000})}>Add 1000</button>
         <button onClick={()=> dispatch({type:'DECREMENTBY500' , playLoad:1000})}>Reduce 1000</button>
        
        
        
         <button onClick={()=> dispatch({type:"INCREMENTBY2000" , playLoad:2000})}>ADD 2000</button>
         <button onClick={()=> dispatch({type:'DECREMENTBY2000' , playLoad:2000})}>Reduce 2000</button>
    </div>
  );
  }

export default App;
