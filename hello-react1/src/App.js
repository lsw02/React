// import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {
	const name = 'React';
	const style = {
   // background-color는 -가 사라지고 Camel Case를 적용하여
   // backgroundColor로 작성해야함.
   backgroundColor : 'black',
   color : 'aqua',
   fontSize : '48px',
   fontWeight : 'bold',
   padding : 16
 };
	return <div style = {style}>{name}</div>;
}

export default App;

